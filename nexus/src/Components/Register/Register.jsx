import React, { useState } from 'react'
import './Register.css'
import { FaTimes } from 'react-icons/fa'


const Register = ({ signUp, setSignUp }) => {
  const [currentForm, setCurrentForm] = useState('Login')

  return (
    <>
      {signUp && <div className='register-main--bx'>
        <div className='register-form--bx'>
          <div onClick={() => setSignUp(!signUp)} className='hamburger--bx'>
            <FaTimes className='register-hamburger-x' size={25} style = {{cursor: 'pointer', color: 'black' }}/>
          </div>
          <h2 className='currentForm'>{currentForm}</h2>
          {currentForm === 'Login' ? <form>
            <div className='login--bx'>
              <input className='login-input' type='emil' placeholder='Email'/>
              <input className='login-input' type='password' placeholder='Password'/>
            </div>
            <input className='login-checkbox' type='checkbox' required/>
            <div className='form-button--bx'>
              <button className='form-btn'>Login</button>
            </div>
          </form>
          :
          <form>
            <div className='register-input--bx'>
              <input className='register-input' type='text' placeholder='Surname'/>
              <input className='register-input' type='text' placeholder='First Name'/>
            </div>
            <div className='register-input--bx'>
              <input className='register-input' type='text' placeholder='Middle name'/>
              <input className='register-input' typre='number' placeholder='hone no.'/>
            </div>
            <div className='location-register--bx'>
              <input className='location-register-input' type='text' placeholder='Country'/>
              <input className='location-register-input' type='text' placeholder='State'/>
              <input className='location-register-input' type='text' placeholder='L.G.A'/>
            </div>
            <div className='address-register--bx'>
              <textarea className='address-register-input' placeholder='Address'/>
            </div>
            <div className='register-input--bx'>
              <input className='register-input' type='password' placeholder='Password'/>
              <input className='register-input' type='password' placeholder='Confirm Password'/>
            </div>
            <p className='tnc-text'>By clicking Create Account, you agree to the <span className='t-n-c'>Terms of Service</span> and <span className='t-n-c'>Privacy Policy</span>.</p>
            <div className='form-button--bx'>
              <button className='form-btn'>Create Account</button>
            </div>
          </form>}
            {currentForm === 'Login'? <p className='to-signup'>Don't have an account? <span className='form-span' onClick={() => setCurrentForm('Signup')}>Click here</span> to signup.</p>
            :
            <p className='to-signup'>Already have an account? <span className='form-span' onClick={() => setCurrentForm('Login')}>Login</span></p>}
        </div>
      </div>}
    </>
  )
}

export default Register