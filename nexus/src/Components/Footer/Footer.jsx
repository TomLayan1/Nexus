import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer--bx'>
        <div className='footer--bx-1'>
          <h2 className='footer-logo'><span className='footer-n--span'>N</span>EXUS</h2>
          <p className='footer-statement'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh elit, tristique vitae dui fermentum, sodales ultrices massa. Nam vel turpis quis nisi sagittis porta. Cras ac fringilla nunc. Sed viverra ex a efficitur malesuada.
          </p>
          <div className='footer-social-icon-bx'>
            Social Icon Here
          </div>
        </div>
        <div className='footer--bx-2'>
          <h3 className='footer-header'>COMPANY</h3>
          <p className='footer-nav'>Home</p>
          <p className='footer-nav'>Contact</p>
          <p className='footer-nav'>About</p>
        </div>
        <div className='footer--bx-3'>
          <h3 className='footer-header'>GET IN TOUCH</h3>
          <p className='footer-contact'>+1-234-5678-9000</p>
          <p className='footer-contact'>contact@gmail.com</p>
        </div>
      </div>
      <hr/>
      <p className='copyright'>Copyright &copy; 2024 Nexus.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer