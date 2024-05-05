import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {  FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ menu, setMenu }) => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <div className='navbar'>
      <div className='logo-bx'>
        <h2 className='logo'>NEXUS</h2>
      </div>
      <div className='nav-signun'>
        <nav className='nav'>
          <ul>
            <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}><Link to={'/'}>Home</Link></li>
            <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}><Link to={'/contact'}>Contact</Link></li>
            <li onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
        <button className='signup-btn'>Signup</button>
      </div>
      <div className='hamburger' onClick={handleNav}>
        {nav ? (<FaTimes className='hamburger-x' size={25} style = {{marginRight: '20px', cursor: 'pointer', color: 'blue' }}/>) : ( <FaBars className='hamburger-bar' size={25} />)}
      </div>
    </div>
  )
}

export default Navbar