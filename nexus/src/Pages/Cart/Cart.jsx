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
    </div>}
    {showPayment && <div className='show-payment'></div>
}
    <div className='cart-bx'>
      <div>
        <h1>Checkout <span>{getTotalQuantity()} items</span></h1>
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