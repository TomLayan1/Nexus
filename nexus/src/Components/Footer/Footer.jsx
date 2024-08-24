import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

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
      <div className='footer-btm-bx'>
        <p className='small'>&#169; Copyright Tomisin 2024. All Right Reserved</p>
        <div className='footer-icon-bx'>
          <a href='facebook'><FaFacebook size={20} style={{ color: '#af8c53' }} /></a>
          <a href='youtube'><FaYoutube size={20} style={{ color: '#af8c53' }} /></a>
          <a href='twitter'><FaTwitter size={20} style={{ color: '#af8c53' }} /></a>
          <a href='instagram'><FaInstagram size={20} style={{ color: '#af8c53' }} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer