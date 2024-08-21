import React from 'react'
import './Hero.css'
import homeInterior from '../../Assets/Category/home-interior.jpg'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-layer'></div>
      <div className='hero-img'>
        <div className='left-bx'>
          <div className='left-img-bx'>beddings</div>
        </div>
        <div className='right-bx'>
          <div className='top-img-bx'>kitchen</div>
          <div className='bottom-img-bx'>wears</div>
        </div>
      </div>
    </section>
  )
}

export default Hero