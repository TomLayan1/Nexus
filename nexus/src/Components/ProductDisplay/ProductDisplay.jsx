import React, { useContext } from 'react';
import './ProductDisplay.css'
import { StoreContext } from '../../Context/StoreContext';

const ProductDisplay = () => {
  // Get the productData using context api
  const {product, addToCart} = useContext(StoreContext)

  return (
    <div className='product-display--bx' id='product-display--bx'>
      <div className='display-statement--bx'>
        <h2 className='display-header'>Lorem Dolor</h2>
        <p className='display-statement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia est quis libero convallis, quis sodales diam posuere.</p>
      </div>
      <div className='display--bx'>
        {/* Iterate through the productData array to generate instances of each product */}
        {product.map((product) => {
          return (
            <div className='product--bx' key={product.id}>
              <div className='product-img--bx'>
                <img className='product-img' src={product.image} alt={product.name}/>
              </div>
              <div className='product-other--bx'>
                <p className='product-name'>{product.name}</p>
                <div className='star-price--bx'>
                  <img className='star' src={product.rating.stars} alt='Rating'/>
                  <p className='price'>${(product.priceCents / 100).toFixed(2)}</p>
                </div>
              </div>
              <button className='add-to-cart-btn' onClick={() => addToCart(product.id)}>ADD TO CART</button>
            </div>
        )
        })}
      </div>
    </div>
  )
}

export default ProductDisplay