import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <form>
        <h2 className='form-title'>Newsletter</h2>
        <div className='input-bx'>
          <input className='email' type='text' placeholder='your@email.com' name='email' />
          <button className='form-btn'>Subscribe</button>
        </div>
      </form>
      <div className='footer-menu'>
        <ul className='footer-ul'>
          <li className='footer-li'>About</li>
          <li className='footer-li'>FAQs</li>
          <li className='footer-li'>News</li>
          <li className='footer-li'>Contact Us</li>
        </ul>
      </div>
      <p className='small'>Built with love</p>
    </footer>
  )
}

export default Footer