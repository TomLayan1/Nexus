import React, { useContext } from 'react'
import './Category.css';
import { categoryData } from '../../Assets/Assets'
import { StoreContext } from '../../Context/Context';

const Category = () => {

  // FROM CONTEXT
  const { handleCategory, selectedCategory, setSelectedCategory, } = useContext(StoreContext)

  return (
    <section className='category-section' id='category'>
      <div className='category-info-bx'>
        <h4 className='category-header'>Explore out category</h4>
        <p className='category-info'>Choose from our diverse category, featuring an array of great products. Our mission is to satisfy your need and elevate your shoppig experiemce, one product at a time.</p>
      </div>
      <div className='category-option-bx'>
        {categoryData.map((itemCategory, index) => (
          <div onClick={()=>setSelectedCategory(itemCategory.name)} key={index} className='option-bx'>
            <div onClick={()=> handleCategory(itemCategory.name)} className='option-icon-bx' style={{ border: `${selectedCategory === itemCategory.name ? '3px solid #1d4c29' : '' }`, padding: `${selectedCategory === itemCategory.name ? '6px' : '3px' }` }}>
             {itemCategory.icon === '' ? 'All' : itemCategory.icon}
            </div>
            <p className='option-name'>{itemCategory.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category