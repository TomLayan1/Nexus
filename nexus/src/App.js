import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import StoreContextProvider from './Context/StoreContext'


const App = () => {

  return (
    <div className='main' id='main'>
      <div>
        <StoreContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StoreContextProvider>
      </div>
    </div>
  )
}

export default App