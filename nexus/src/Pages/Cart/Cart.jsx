import React, { useContext, useState } from 'react'
import './Cart.css'
import { FaTimes } from 'react-icons/fa';
import CartSummary from '../../Components/CartSummary/CartSummary'
import Checkout from '../../Components/Checkout/Checkout'
import { StoreContext } from '../../Context/Context'
import Payment from '../../Components/Payment/Payment';

const Cart = () => {
  // FROM CONTEXT
  const { notification, setNotification, getTotalQuantity } = useContext(StoreContext)

  const [showPayment, setShowPayment] = useState(false)


  return (
    <>
    {notification && <div className='notification-nav'>
      <p className='notification'>{notification}</p>
      <FaTimes onClick={() => setNotification(false)} size={23} style={{ color: '#ffffff'}} />
    </div>}
    {showPayment && <div className='show-payment'></div>
}
    <div className='cart-bx'>
      <div className='cart-quantity-header'>
        <h1>Checkout <span className='quantity-header-span'>({getTotalQuantity()})</span> items</h1>
      </div>
      <p className='cart-header'>Cart Items</p>
      <div className='cart-info-bx'>
        <CartSummary />
        <Checkout setShowPayment={setShowPayment} />
        <Payment showPayment={showPayment} setShowPayment={setShowPayment} />
      </div>
    </div>
    </>
  )
}

export default Cart