import React, { useContext } from 'react'
import './Checkout.css'
import { StoreContext } from '../../Context/Context'

const Checkout = () => {

  // FROM CONTEXT
  const { getTotalQuantity, getShippingTotalPrice, getCartItemPrice, priceBeforeShipping, estimatedTax, totalPrice } = useContext(StoreContext)

  return (
    <div className='cart-summary-main--bx'>
      <div className='summary--bx'>
        <div className="item-summary-container">
          <p className="items-summary">Items({getTotalQuantity()}):</p>
          <p className="items-price-sum">${getCartItemPrice()}</p>
        </div>
        <div className="shipping-summary-container">
          <p className="shipping-handling">Shipping & handling:</p>
          <p className="shipping-fee">${getShippingTotalPrice()}</p>
        </div>
        <div className="before-tax-summary-container">
          <p className="before-tax">Total before tax:</p>
          <p className="before-tax-price">${priceBeforeShipping()}</p>
        </div>
        <div className="plus-summary-container">
          <p className="tax-pay">Tax(10%):</p>
          <p className="plus-tax-sum">${estimatedTax()}</p>
        </div>
        <div className="total-summary-container">
          <h3 className="order-total">Total Price Of Order</h3>
          <h3 className="total-price">${totalPrice()}</h3>
        </div>
        <button className='checkout-btn'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Checkout