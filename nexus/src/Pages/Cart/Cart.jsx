import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/CartItem/CartItem'
import CartSummary from '../../Components/CartSummary/CartSummary'


const Cart = () => {
  return (
    <div className='cart' id='cart'>
      <h2 className='cart-header'>Your Cart</h2>
      <div className='cart-component--bx'>
        <CartItem />
        <CartSummary />
      </div>
    </div>
  )
}

export default Cart