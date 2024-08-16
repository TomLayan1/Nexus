import React, { useContext } from 'react'
import './Cart.css'
import { FaTimes } from 'react-icons/fa';
import CartSummary from '../../Components/CartSummary/CartSummary'
import Checkout from '../../Components/Checkout/Checkout'
import { StoreContext } from '../../Context/Context'

const Cart = () => {
  // FROMcONTEXT
  const { notification, setNotification } = useContext(StoreContext)
  return (
    <>
    {notification && <div className='notification-nav'>
      <p className='notification'>{notification}</p>
    </div>}
    <div className='cart-bx'>
      <h2 className='cart-header'>Cart Items</h2>
      <div className='cart-info-bx'>
        <CartSummary />
        <Checkout />
      </div>
    </div>
    </>
  )
}

export default Cart