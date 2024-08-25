import React from 'react'
import './About.css'
import Header from '../../Components/Header/Header'

const About = () => {
  return (
    <section className='about-section'>
      <Header />
      <div className='about-img-bx'>
        <div className='img-overlay'>
        </div>
      </div>
      <div className='about-txt-bx'>
        <h1 className='about-header-txt'>About Us</h1>
        <p className='about-content'>Welcome to Nexus, your premier destination for quality home essentials and stylish living. At Nexus, we are dedicated to making your home a reflection of your personal style and comfort. We offer a curated selection of home appliances, fashionable wears, elegant home decor, and luxurious bedding, all designed to enhance your living space and lifestyle.
        <br/>
        <br/>
        Our mission is to provide you with high-quality products that combine functionality with aesthetics, ensuring that every item you purchase from Nexus adds value to your home. Whether you're upgrading your kitchen, refreshing your wardrobe, or redecorating your living space, we have everything you need to make your home truly yours.
        <br/>
        <br/>
        At Nexus, we believe that your home should be a sanctuary, a place where comfort meets style. That's why we source our products from trusted brands and artisans who share our commitment to quality and design. With our wide range of products, exceptional customer service, and a seamless shopping experience, Nexus is here to help you create a home that reflects your unique taste and lifestyle.
        <br/>
        <br/>
        Thank you for choosing Nexus, where style meets comfort. We look forward to helping you transform your home into a space you'll love.</p>
      </div>
    </section>
  )
}

export default About