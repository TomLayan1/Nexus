import React from 'react';
import './App.css'
import StoreContextProvider from './Context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


const App = () => {
  return (
      <StoreContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </StoreContextProvider>
  )
}

export default App