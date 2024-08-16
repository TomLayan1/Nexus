import React from 'react'
import './Home.css'
import Footer from '../../Components/Footer/Footer'
import Category from '../../Components/Category/Category'
import ProductsDisplay from '../../Components/ProdutsDisplay/ProductsDisplay'

const Home = () => {

  return (
    <div className='home' id='home'>
      <div className='home-components'>
        <Category />
        <ProductsDisplay />
      </div>
      <Footer />
    </div>
  )
}

export default Home