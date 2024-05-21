import React, { useState,useContext, useEffect } from 'react';
import './CartItem.css';
import { StoreContext } from '../../Context/StoreContext';
import dayjs from 'dayjs';


const CartItem = () => {

  const {productsData, cart, addToCart, removeFromCart, deliveryOptions} = useContext(StoreContext);

  // state is initialized as an empty object.
  // It will hold the selected delivery option index for each product.
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({});
  console.log(selectedDeliveryOption)






// Load the selected delivery options from localStorage when the component mounts
  useEffect(() => {
    const savedOptions = localStorage.getItem('selectedDeliveryOptions');
    if (savedOptions) {
      setSelectedDeliveryOption(JSON.parse(savedOptions));
    }
    else {
      // Initialize the first delivery option by default if no saved options exist
      const initialSelection = {};
      productsData.forEach(product => {
        if (cart[product.id] > 0) {
          initialSelection[product.id] = 0; // Select the first delivery option by default
        }
      });
      setSelectedDeliveryOption(initialSelection);
    }
  }, [productsData, cart]);

  // Save the selected delivery options to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('selectedDeliveryOptions', JSON.stringify(selectedDeliveryOption));
  }, [selectedDeliveryOption]);


  // updates the state with the selected delivery option for the given product.
  const handleDeliveryOption = (productId, deliveryOptionIndex) => {
       setSelectedDeliveryOption(prevState => ({
      ...prevState,
      [productId]: deliveryOptionIndex
    }));
  }


  return (
    <div className='cartItem-main--bx cart-items-display'>
      {productsData.map((product, index) => {
        if (cart[product.id] > 0) {
          const selectedOptionIndex = selectedDeliveryOption[product.id] ?? 0;
          const selectedOption = deliveryOptions[selectedOptionIndex];
          const today = dayjs();
          const selectedDeliveryDate = selectedOption ? today.add(selectedOption.deliveryDays, 'days').format('dddd, MMMM D') : '';

          return (
            <div className="main-item-container" key={index}>
              <div className="date-img-name-container">
                <div className="delivery-date-container">
                  <h3 className="delivery-date">delivery date: {selectedDeliveryDate}</h3>
                </div>
                <div className="img-name-container">
                  <div className="product-img-container">
                    <img className="item-img" src={product.image} alt=''/>
                  </div>
                  <div className="name-price-quantity">
                    <div className="name-price-container">
                      <p className="item-name">{product.name}</p>
                      <p className="price">${(product.priceCents/100).toFixed(2)}</p>
                    </div>
                    <div className="quantity-container">
                      <div className='cart-item-remove-quantity--bx'>
                        <button className="reduce-btn js-reduce-btn">-</button>
                        <p className="`item-quantity">0</p>
                        <button className="add-btn js-add-btn">+</button>
                      </div>
                      <button className="delete-btn js-delete-btn"><i className='bx bx-trash'></i> Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shipping-option-container">
                {/* Delivery options */}
                { deliveryOptions.map((deliveryOption, optionIndex) => {
                  const today = dayjs();
                  const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
                  const dateString = deliveryDate.format('dddd, MMMM D');

                  const shippingPrice = deliveryOption.priceCents === 0 ? 'FREE' : (deliveryOption.priceCents/100).toFixed(2)
                  return(
                    <div className="shipping-option" key={optionIndex}>
                      <input
                      className="select-term"
                      type="radio"
                      name={product.id}
                      // attribute of the radio button uses a ternary operator to determine if the current option is selected.
                      checked={selectedDeliveryOption[product.id] === optionIndex}
                      onChange={() => handleDeliveryOption(product.id, optionIndex)}
                      />
                      <div className="term-container">
                        <p className="shipping-term">{dateString}</p>
                        <p className="term-fee">${shippingPrice} - Shipping</p>
                      </div>        
                    </div>
                )
  }) }
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default CartItem