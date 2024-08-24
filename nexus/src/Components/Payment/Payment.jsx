import React from 'react'
import './Payment.css'
import { FaTimes } from 'react-icons/fa'

const Payment = ({ showPayment, setShowPayment }) => {
  return (
    <div className='payment-section' style={{ transform: `${showPayment ? 'translateX(0)' : 'translateX(100%)'}`, duration: '3s' }}>
      <div className='payment-header-bx'>
        <h2 className='payment-header'>Complete Payment</h2>
        <FaTimes onClick={() => setShowPayment(false)} size={23} style={{ color: '#cec8c8' }} />
      </div>
      <div className='payment-form-bx'>
        <form className='payment-form'>
          <input className='payment-input' type='text' name='firstName' value={''} placeholder='First Name' />
          <input className='payment-input' type='text' name='lastName' value={''} placeholder='Last Name' />
          <input className='payment-input' type='email' name='email' value={''} placeholder='Email' />
          <div className='amount-div'>
            <p>₦</p>
            <input className='amount-input' type='number' name='amount' value={''} />
          </div>
          <button className='payment-btn'>Pay</button>
        </form>
      </div>
    </div>
  )
}

export default Payment