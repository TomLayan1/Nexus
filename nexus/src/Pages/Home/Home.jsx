import React from 'react'
import './Home.css'
import Category from '../../Components/Category/Category'
import ProductsDisplay from '../../Components/ProdutsDisplay/ProductsDisplay'
import Hero from '../../Components/Hero/Hero'
import Header from '../../Components/Header/Header'

const Home = () => {

  return (
    <div className='home' id='home'>
      <Header />
      <Hero />
      <div className='home-components'>
        <Category />
        <ProductsDisplay />
      </div>
    </div>
  )
}

export default Home