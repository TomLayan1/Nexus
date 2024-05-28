import React, { useState,useContext, useEffect } from 'react';
import './CartItem.css';
import { StoreContext } from '../../Context/StoreContext';
import dayjs from 'dayjs';
import { assets } from '../../Assets/Assets'
import { Link } from 'react-router-dom'



const CartItem = () => {

  const {product, storeCart, increaseItemQuantity, reduceItemQuantity, deleteItem, deliveryOptions, handleDeliveryOption, selectedDeliveryOption} = useContext(StoreContext);


  return (
    <div className='cartItem-main--bx cart-items-display'>
      {Object.keys(storeCart).length === 0 ? (
        <div className='empty-cart--bx'>
          <img className='cart-bg-img' src={assets.cart_background} alt='Cart background'/>
          <div className='to-shop--bx'>
            <p className='empty-cart-statement'>Cart is empty</p>
            <Link className='to-store-link' to='/home'><button className='to-store-btn'>GO TO STORE</button></Link>
          </div>
        </div>
      ) : (
        <>
          {Object.entries(storeCart).map(([productId]) => {
            const productItem = product.find(product => product.id === productId);
            if (!productItem) return null;
            return (
              <div className="main-item-container" key={productItem.id}>
                <div className="date-img-name-container">
                  <div className="delivery-date-container">
                    <h3 className="delivery-date">
                      {/* delivery date: {selectedDeliveryOption[productId] !== undefined && (dayjs().add(deliveryOptions[selectedDeliveryOption[productId]].deliveryDays, 'days').format('dddd, MMMM D'))} */}
                      delivery date: {storeCart[productItem.id].deliveryOptionIndex !== undefined && dayjs().add(deliveryOptions[storeCart[productItem.id].deliveryOptionIndex].deliveryDays, 'days').format('dddd, MMMM D')}
                    </h3>
                  </div>
                  <div className="img-name-container">
                    <div className="product-img-container">
                      <img className="item-img" src={productItem.image} alt=''/>
                    </div>
                    <div className="name-price-quantity">
                      <div className="name-price-container">
                        <p className="item-name">{productItem.name}</p>
                        <p className="price">${(productItem.priceCents/100).toFixed(2)}</p>
                      </div>
                      <div className="quantity-container">
                        <div className='cart-item-remove-quantity--bx'>
                          <button className="reduce-btn js-reduce-btn" onClick={() => reduceItemQuantity(productItem.id)}>-</button>
                          <p className="`item-quantity">{storeCart[productItem.id].quantity}</p>
                          <button className="add-btn js-add-btn" onClick={() => increaseItemQuantity(productItem.id)}>+</button>
                        </div>
                        <button className="delete-btn js-delete-btn" onClick={() => deleteItem(productItem.id)}><i className='bx bx-trash'></i>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shipping-option-container">
                  <p className='delivery-text'>Choose delivery date</p>
                  {/* Delivery options */}
                  { deliveryOptions.map((deliveryOption, optionIndex) => {
                    {/* Use the dayjs external libraryy to calculate delivery dates */}
                    const today = dayjs();
                    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
                    const dateString = deliveryDate.format('dddd, MMMM D');
                    const shippingPrice = deliveryOption.priceCents === 0 ? 'FREE' : `$${(deliveryOption.priceCents/100).toFixed(2)}`;
                    
                    return(
                      <div className="shipping-option" key={optionIndex}>
                        <input
                        className="select-term"
                        type="radio"
                        name={productItem.id}
                        // attribute of the radio button uses a ternary operator to determine if the current option is selected.
                        checked={storeCart[productItem.id].deliveryOptionIndex === optionIndex}
                        onChange={() => handleDeliveryOption(productItem.id, optionIndex)}
                        />
                        <div className="term-container">
                          <p className="shipping-term">{dateString}</p>
                          <p className="term-fee">{shippingPrice} - Shipping</p>
                        </div>        
                      </div>
                    )}
                  )}
                </div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

export default CartItem