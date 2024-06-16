import React, { useState, useContext } from 'react'
import './Navbar.css'
import {  FaBars, FaTimes } from 'react-icons/fa'
import { assets } from '../../Assets/Assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';


const Navbar = ({setSignUp, signUp}) => {

  const [menu, setMenu] = useState('home')

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const {getTotalQuantity} = useContext(StoreContext);


  return (
    <div className='navbar' id='navbar'>
      <div className='logo--bx'>
        <Link to={'/home'}><h2 className='logo'><span className='n--span'>N</span>EXUS</h2></Link>
        <div className='search--bx'>
          <input className='search' type='search' placeholder='Search'/>
          <button className='search-btn'>SEARCH</button>
        </div>
        <div className='search-signup--bx'>
          <img className='search-icon' src={assets.searchIcon} alt='search-icon'/>
          <button onClick={() =>setSignUp(!signUp)} className='signup--btn'>Login</button>
        </div>
      </div>
      <div className='nav--bx'>
        <div className='hamburger-social--bx'>
          <div className='hamburger' onClick={handleNav}>
            {nav ? (<FaTimes className='hamburger-x' size={25} style = {{marginRight: '20px', cursor: 'pointer', color: 'blue' }}/>) : ( <FaBars className='hamburger-bar' size={25} />)}
          </div>
        </div>
        <nav>
          <Link className='navbar-link' to={'/home'} onClick={()=>setMenu('home')}><div className={menu === 'home' ? 'current--menu' : ''}>Home</div></Link>
          <Link className='navbar-link' to={''} onClick={()=>setMenu('delivery')}><div className={menu === 'delivery' ? 'current--menu' : ''}>Delivery</div></Link>
          <Link className='navbar-link' to={''} onClick={()=>setMenu('about')}><div className={menu === 'about' ? 'current--menu' : ''}>About</div></Link>
          <Link className='navbar-link' to={''} onClick={()=>setMenu('contact')}><div className={menu === 'contact' ? 'current--menu' : ''}>Contact us</div></Link>
        </nav>
        <Link to={'/cart'}><div className='cart--bx'>
          <div className='cart-quantity'>{getTotalQuantity()}</div>
          <img className='cart--icon' src={assets.cartIcon} alt='cart icon'/>
        </div></Link>
      </div>
    </div>
  )
}

export default Navbar