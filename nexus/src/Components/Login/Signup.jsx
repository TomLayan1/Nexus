import React, { useState } from 'react';
import './Signup.css';
import { FaTimes } from 'react-icons/fa';

const Login = ({ showSignup, setShowSignup }) => {
  // STATE TO CHANGE FORM TYPE
  const [signup, setSignup] = useState('signup')
  return (
    <>
     {showSignup && <div className='register-section'>
      <div className='register-fst-bx'>
        <div className='register-header-bx'>
          <h2 className='registration-title'>Sign Up</h2>
          <FaTimes onClick={()=>setShowSignup(false)} size={23} style={{ color: '#cec8c8', cursor: 'pointer' }} />
        </div>
        <form className='registration-form'>
          <div>
            {signup === 'signup' ? 
            <div className='registration-input-bx'>
              <div className='signup-input-bx'>
                <input className='signup-input' placeholder='First name' type='text' />
                <input className='signup-input' placeholder='Last name' type='text' />
              </div>
              <div className='signup-input-bx'>
                <input className='signup-input' placeholder='Email' type='email' />
                <input className='signup-input' placeholder='Phone no.' type='number' />
              </div>
              <input className='signup-address-input' placeholder='Address' type='text' />
              <div className='signup-input-bx'>
                <input className='signup-input' placeholder='Password' type='password' />
                <input className='signup-input' placeholder='Password' type='password' />
              </div>
            </div>
            :
            <div className='registration-input-bx'>
              <input className='registration-input' placeholder='Email' />
              <input className='registration-input' placeholder='Password' />
            </div>
            }
          </div>
          <div>
            <button className='register-btn'>{signup === 'signup' ? 'Sign up' : 'Login'}</button>
            {signup === 'signup' ? 
              <p className='register-btm-txt'>Already have an account? <span onClick={()=>setSignup('login')} className='register-span'>Login</span></p>
              :
              <p className='register-btm-txt'>Do not have an account? <span onClick={()=>setSignup('signup')} className='register-span'>Sign Up</span></p>}
          </div>
        </form>
      </div>
     </div>}
    </>
  )
}

export default Login