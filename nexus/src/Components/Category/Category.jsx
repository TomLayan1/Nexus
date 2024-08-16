import React, { useContext } from 'react'
import './Category.css'
import { categoryData } from '../../Assets/Assets'
import { StoreContext } from '../../Context/Context';

const Category = () => {

  // FROM CONTEXT
  const {selectedCategory, setSelectedCategory } = useContext(StoreContext)

  return (
    <section className='category-bx' id='category'>
      <div className='category-info-bx'>
        <h4 className='category-header'>Explore out category</h4>
        <p className='category-info'>Choose from our diverse category, featuring an array of great products. Our mission is to satisfy your need and elevate your shoppig experiemce, one product at a time.</p>
      </div>
      <div className='category-option-bx'>
        {categoryData.map((itemCategory, index) => (
          <div onClick={()=>setSelectedCategory(itemCategory.name)} key={index} className='option-bx'>
            <div className='option-img-bx' style={{ border: `${selectedCategory === itemCategory.name ? '3px solid #fe8c00' : '3px solid #000000' }`, padding: `${selectedCategory === itemCategory.name ? '8px' : '5px' }` }}>
              <img className='option-img' src={itemCategory.image} alt={itemCategory.name} />
            </div>
            <p className='option-name'>{itemCategory.name}</p>
          </div>
        ))}
      </div>
      <hr/>
    </section>
  )
}

export default Category