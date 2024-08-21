import React, { useContext, useState } from 'react'
import './ProductsDisplay.css'
import { StoreContext } from '../../Context/Context'
import { products } from '../../Assets/Assets'


const ProductsDisplay = () => {

  // FROM CONTEXT
  const { filteredProduct, addToCart } = useContext(StoreContext);

  return (
    <section className='products-display-bx' id='products'>
      <h4 className='products-header'>Our Products</h4>

      {/* Map through the produdts to make instances of each one */}
      <div className='products-bx'>
        {filteredProduct.map(item => (
            <div className='item-bx' key={item.id}>
              <div className='item-img-bx'>
                <img className='item-img' src={item.image} alt={item.name} />
              </div>
              <div className='item-info-bx'>
                <div className='price-rating-bx'>
                  <p className='item-price'>{(item.priceCents / 100).toFixed(2)}</p>
                  <img className='item-rating' src={item.rating.stars} alt={item.rating.count} />
                </div>
                <p className='item-name'>{item.name}</p>
              </div>
              <button onClick={()=>addToCart(item.id)} className='add-btn'>ADD TO CART</button>
            </div>

        ))}
      </div>
    </section>
  )
}

export default ProductsDisplay