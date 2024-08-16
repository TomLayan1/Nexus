import React, { useContext } from 'react'
import './CartSummary.css'
import { StoreContext } from '../../Context/Context'
import { deliveryOptions } from '../../Assets/DeliveryDate';
import dayjs from 'dayjs'

const CartSummary = () => {

  // FROM CONTEXT
  const {storeProducts, storeCart, reduceQuantity, increaseQuantity, deleteItem, selectDeliveryOption} = useContext(StoreContext);

  return (
    <div className='cart-summary'>
      {Object.entries(storeCart).map(([productId]) => {
        const cartItem = storeProducts.find(product => product.id === productId);
        if (!cartItem) return null;
        return (
        <div key={cartItem.id} className='main-item-bx'>
          <div className='cart-item-bx'>
            <div className='cart-item-details-bx'>
              <p className='delivery-date-display'>Delivery date: {storeCart[cartItem.id].deliveryOptionIndex !== undefined && dayjs().add(deliveryOptions[storeCart[cartItem.id].deliveryOptionIndex].deliveryDays, 'days').format('dddd, MMMM D')}</p>
              <div className='cart-items-first'>
                <div className='cart-img-bx'>
                  <img className='cart-product-img' src={cartItem.image} alt={cartItem.name} />
                </div>
                <div className='product-detail-bx'>
                  <p className='cart-product-name'>{cartItem.name}</p>
                  <p className='cart-product-price'>${(cartItem.priceCents / 100).toFixed(2)}</p>
                  <div className='cart-btn-bx'>
                    <button onClick={() => reduceQuantity(cartItem.id)} className='reduce-btn'>-</button>
                    <p className='quantity'>{storeCart[cartItem.id].quantity}</p>
                    <button onClick={() => increaseQuantity(cartItem.id)} className='increase-btn'>+</button>
                    <button onClick={() => deleteItem(cartItem.id)} className='delete-btn'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='delivery-option-bx'>
              <div className='all-option-bx'>
                {deliveryOptions.map((option, optionIndex) => {
                  const today = dayjs();
                  const deliveryDate = today.add(option.deliveryDays, 'days');
                  const dateInString = deliveryDate.format('dddd, MMMM D')
                  const deliveryPrice = option.priceCents === 0 ? 'FREE' : `$${(option.priceCents / 100).toFixed(2)}`
                  
                  return (<div key={optionIndex} className='options-bx'>
                    <input
                      type='radio'
                      name={cartItem.id}
                      checked={storeCart[cartItem.id].deliveryOptionIndex === optionIndex}
                      onChange={()=> selectDeliveryOption(cartItem.id, optionIndex)}
                      className='shipping-option'/>
                    <div className='date-price-bx'>
                      <p className='shipping-date'>{dateInString}</p>
                      <p className='shipping-price'>{deliveryPrice} - Shipping</p>
                    </div>
                  </div>
                  )})
                }
              </div>
            </div>
          </div>
        </div>
      )})}
    </div>
  )
}

export default CartSummary