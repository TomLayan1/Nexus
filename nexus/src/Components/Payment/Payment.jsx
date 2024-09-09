import React, { useState, useContext} from 'react'
import './Payment.css'
import { FaTimes } from 'react-icons/fa'
import PaystackPop from '@paystack/inline-js'
import { StoreContext } from '../../Context/Context'

const Payment = ({ showPayment, setShowPayment }) => {
  // FROM CONTEXT
  const { totalPrice, shopCart, setShopCart, setShoppingOrders, setNotification } = useContext(StoreContext)

  // STATE TO SHOW PAYMENT NOTIFICATION
  const [paymentNotification, setPaymentNotification] = useState(null);

  const amountToBePaid = Number(totalPrice())
  const [paymentForm, setPaymentForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    amount: amountToBePaid
  })

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentForm( prev => (
      {...prev, [e.target.name]: e.target.value}
    ))
  }

  // PAYMENT FORM VALIDATION
  const validatePayment = () => {
    if (!paymentForm.email || !paymentForm.firstName || !paymentForm.lastName || !paymentForm.amount) {
      setPaymentNotification('All fields are required');
      return false;
    }
    return true
  }

  // PAYSTACK IMPLEMENTATION
  const payWithPayStack = (event) => {
    event.preventDefault();

    // Validate before proceeding
    if (!validatePayment()) return;

    const paystack = new PaystackPop ();
    paystack.newTransaction({
    key: 'pk_test_fc33ab46313be3d068d153d5a66fc5451d2c814c',
    amount: paymentForm.amount * 100,
    email: paymentForm.email,
    firstname: paymentForm.firstName,
    lastname: paymentForm.lastName,
    onSuccess(transaction) {
      let message = `Payment Complete! Reference ${transaction.reference}`;
      alert(message);

      // Clear the cart after payment is successful
      setShopCart({});
      setNotification('Cart has been emptied. Check orders');

      // Move cart items to orders
      setShoppingOrders(order => [...order, ...Object.entries(shopCart)]);
    },
    onCancel(){
      alert('Transaction Canceled!')
    }
  });

    setPaymentForm({
      email: '',
      firstName: '',
      lastName: '',
      amount: '₦'
    })
    setShowPayment(false)
  }

  return (
    <div className='payment-section' style={{ transform: `${showPayment ? 'translateX(0%)' : 'translateX(100%)'}` }}>
      <div className='payment-header-bx'>
        <h2 className='payment-header'>Complete Payment</h2>
        <FaTimes onClick={() => setShowPayment(false)} size={23} style={{ color: '#cec8c8' }} />
      </div>
      <div className='payment-form-bx'>
        <p className='validation'>{paymentNotification}</p>
        <form className='payment-form'>
          <input className='payment-input' type='text' name='firstName' value={paymentForm.firstName} onChange={handlePayment} placeholder='First Name' />
          <input className='payment-input' type='text' name='lastName' value={paymentForm.lastName} onChange={handlePayment} placeholder='Last Name' />
          <input className='payment-input' type='email' name='email' value={paymentForm.email} onChange={handlePayment} placeholder='Email' />
          <div className='amount-div'>
            <p className='amount-input'>&#x20A6;{(paymentForm.amount).toLocaleString()}</p>
          </div>
          <button onClick={payWithPayStack} className='payment-btn'>Pay</button>
        </form>
      </div>
    </div>
  )
}

export default Payment