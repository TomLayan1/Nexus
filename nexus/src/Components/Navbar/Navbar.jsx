import React, { useState } from 'react'
import './Navbar.css'
import {  FaBars, FaTimes } from 'react-icons/fa'
import { assets } from '../../Assets/Assets'

const Navbar = () => {

  const [menu, setMenu] = useState('home')

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className='navbar' id='navbar'>
      <div className='logo--bx'>
        <div className='hamburger' onClick={handleNav}>
          {nav ? (<FaTimes className='hamburger-x' size={25} style = {{marginRight: '20px', cursor: 'pointer', color: 'blue' }}/>) : ( <FaBars className='hamburger-bar' size={25} />)}
        </div>
        <h2 className='logo'><span className='n--span'>N</span>EXUS</h2>
        <div className='search-signup--bx'>
          <div className='search--bx'>
            <input className='search' type='search' placeholder='Search'/>
            <img className='search-icon' src={assets.searchIcon} alt='search-icon'/>
          </div>
          <button className='signup--btn'>Sign up</button>
        </div>
      </div>
      <div className='nav--bx'>
        <div className='social--bx'>
        {/* Social Icons Here */}
        </div>
        <nav>
          <div onClick={()=>setMenu('home')} className={menu === 'home' ? 'current--menu' : ''}>Home</div>
          <div onClick={()=>setMenu('contact')} className={menu === 'contact' ? 'current--menu' : ''}>Contact</div>
          <div onClick={()=>setMenu('about')} className={menu === 'about' ? 'current--menu' : ''}>About</div>
        </nav>
        <div className='cart--bx'>
          <div className='cart-quantity'>0</div>
          <img className='cart--icon' src={assets.cartIcon} alt='cart icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar