import React, { useContext, useState } from 'react';
import './Header.css';
import { FaBars, FaTimes, FaOpencart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/Context';

const Header = () => {

  // STATE TO TOGGLE MENU
  const [showMenu, setShowMenu] = useState(false)

  // FROM CCONTEXT
    const { getTotalQuantity, notification } = useContext(StoreContext)

  return (
    <>
    {notification && <div className='notification-nav'>
      <p className='notification'>Item successfully added!</p>
    </div>}
    <header className='header' id='header'>
      <Link to={'/'} className='logo-bx'>
        <h1 className='logo'><FaOpencart size={35} /> NEXUS</h1>
      </Link>

      <div className='nav-bx'>
        {showMenu && 
          <div onClick={()=>setShowMenu(!showMenu)} className='empty'></div>
        }
        <nav className={`${showMenu ? '' : 'menu'}`}>
          <ul>
            <Link to={'/'}  onClick={()=>setShowMenu(!showMenu)}><li>Home</li></Link>
            <a onClick={()=>setShowMenu(!showMenu)} href='#products'><li>Products</li></a>
            <Link to={'/about'} onClick={()=>setShowMenu(!showMenu)}><li>About</li></Link>
            <a onClick={()=>setShowMenu(!showMenu)} href='#contact'><li>Contact</li></a>
          </ul>
        </nav>
      </div>

      <div className='cart-ham-bx'>
        <div className='nav-icons-bx'>
          <Link to={'/cart'}><div className='nav-cart-bx'>
            <MdOutlineShoppingCart size={26} style={{color: '#1d4c29'}} />
            <p className='cart-quantity'>{getTotalQuantity()}</p>
          </div></Link>
        </div>

          <div className='ham-bx' onClick={()=>setShowMenu(!showMenu)}>
            {showMenu ? <FaTimes size={23} style={{ color: '#1d4c29' }} /> : <FaBars size={23} style={{ color: '#1d4c29'}} /> }
          </div>
      </div>
    </header>
    </>
  )
}

export default Header