import React, { useState } from 'react'
import './Navbar.css'
import {  FaBars, FaTimes } from 'react-icons/fa'
import { assets } from '../../Assets/Assets'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [menu, setMenu] = useState('home')

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className='navbar' id='navbar'>
      <div className='logo--bx'>
        <h2 className='logo'><span className='n--span'>N</span>EXUS</h2>
        <div className='search--bx'>
          <input className='search' type='search' placeholder='Search'/>
          <button className='search-btn'>SEARCH</button>
        </div>
        <div className='search-signup--bx'>
          <img className='search-icon' src={assets.searchIcon} alt='search-icon'/>
          <button className='signup--btn'>Sign up</button>
        </div>
      </div>
      <div className='nav--bx'>
        <div className='hamburger-social--bx'>
          <div className='hamburger' onClick={handleNav}>
            {nav ? (<FaTimes className='hamburger-x' size={25} style = {{marginRight: '20px', cursor: 'pointer', color: 'blue' }}/>) : ( <FaBars className='hamburger-bar' size={25} />)}
          </div>
        </div>
        <nav>
          <div onClick={()=>setMenu('home')} className={menu === 'home' ? 'current--menu' : ''}><Link to={'/'}>Home</Link></div>
          <div onClick={()=>setMenu('delivery')} className={menu === 'delivery' ? 'current--menu' : ''}><Link>Delivery</Link></div>
          <div onClick={()=>setMenu('about')} className={menu === 'about' ? 'current--menu' : ''}><Link>About</Link></div>
          <div onClick={()=>setMenu('contact')} className={menu === 'contact' ? 'current--menu' : ''}><Link>Contact us</Link></div>
        </nav>
        <div className='cart--bx'>
          <div className='cart-quantity'>0</div>
          <Link to={'/cart'}><img className='cart--icon' src={assets.cartIcon} alt='cart icon'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar