import React, { useContext } from 'react'
import './CartItem.css'
import { assets } from '../../Assets/Assets'
import { FaTrash } from 'react-icons/fa'
import { StoreContext } from '../../Context/StoreContext';

const CartItem = () => {

  const {productsData, cart, addToCart, removeFromCart} = useContext(StoreContext)
  

  return (
    <div className='cartItem-main--bx'>
      {productsData.map((product, index) => {
        if (cart[product.id] > 0) {
          return (
            <div className='cart-item-display--bx' key={index}>
              <div className='cart-item-img-name--bx'>
                <div className='cart-item-img--bx'>
                  <img className='cart-item-img' src={product.image}  alt='Item name'/>
                </div>
                <div className='cart-item-name--bx'>
                  <div className='cart-item-name'>{product.name}</div>
                  <h3 className='cart-price'>${(product.priceCents / 100).toFixed(2)}</h3>
                </div>
              </div>
              <div className='cart-item-remove-quantity--bx'>
                <div className='remove--bx'>
                  <i class='bx bx-trash'></i>
                  <p>REMOVE</p>
                </div>
                <div className='quantity--bx'>
                  <button className='cart-reduce-btn'>-</button>
                  <p className='cart-item-quantity'>20</p>
                  <button className='cart-increase-btn'>+</button>
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default CartItem