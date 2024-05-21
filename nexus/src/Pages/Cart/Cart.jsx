import React, { useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/CartItem/CartItem'
import CartSummary from '../../Components/CartSummary/CartSummary'


const Cart = ({selectedDeliveryOption, setSelectedDeliveryOption}) => {
  // const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({});
  console.log(selectedDeliveryOption)

  return (
    <div className='cart' id='cart'>
      <h2 className='cart-header'>Your Cart</h2>
      <div className='cart-component--bx'>
        <CartItem selectedDeliveryOption={selectedDeliveryOption} setSelectedDeliveryOption={setSelectedDeliveryOption}/>
        <CartSummary />
      </div>
    </div>
  )
}

export default Cart