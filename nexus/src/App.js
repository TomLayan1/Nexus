import React, { useState} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

const App = () => {
  const [menu, setMenu] = useState('home')
  return (
    <div className='main'>
      <Navbar menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App