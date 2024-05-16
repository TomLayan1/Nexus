import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
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
              <Route path='/' element={<Home/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StoreContextProvider>
      </div>
    </div>
  )
}

export default App