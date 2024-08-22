import React from 'react'
import './Hero.css'
import homeInterior from '../../Assets/Category/home-interior.jpg'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-img'>
        <div className='left-img-bx'>
          <div className='hero-layer'>
            <h1 className='hero-txt'>Live comfortably</h1>
          </div>
        </div>
        <div className='right-bx'>
          <div className='top-img-bx'>
            <div className='hero-layer'>
              <h1 className='hero-txt'>Kitchen</h1>
            </div>
          </div>
          <div className='bottom-img-bx'>
            <div className='hero-layer'>
              <h1 className='hero-txt'>Clothing</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero