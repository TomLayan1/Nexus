import React, { useState } from 'react'
import './Home.css'
import Category from '../../Components/Category/Category'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'

const Home = () => {
  // Declare a state to select category
  const [category, setCategory] = useState('All')
  return (
    <div className='home' id='home'>
      <Category category={category} setCategory={setCategory}/>
      <hr/>
      <ProductDisplay />
    </div>
  )
}

export default Home