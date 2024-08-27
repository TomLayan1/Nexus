import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

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
          <li className='footer-li'>ABOUT</li>
          <li className='footer-li'>FAQs</li>
          <li className='footer-li'>NEWS</li>
          <li className='footer-li'>CONTACT US</li>
        </ul>
      </div>
      <div className='footer-btm-bx'>
        <p className='small'>&#169; Copyright Tomisin 2024. All Right Reserved</p>
        <div className='footer-icon-bx'>
          <a href='facebook' target='_blank'><FaFacebook size={20} style={{ color: '#1d4c29' }} /></a>
          <a href='youtube' target='_blank'><FaYoutube size={20} style={{ color: '#1d4c29' }} /></a>
          <a href='twitter' target='_blank'><FaTwitter size={20} style={{ color: '#1d4c29' }} /></a>
          <a href='instagram' target='_blank'><RiInstagramFill size={20} style={{ color: '#1d4c29' }} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer