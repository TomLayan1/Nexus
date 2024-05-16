import React from 'react'
import './Home.css'
import Category from '../../Components/Category/Category'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'

const Home = () => {
  return (
    <div className='home' id='home'>
      <Category />
      <hr/>
      <ProductDisplay />
    </div>
  )
}

export default Home