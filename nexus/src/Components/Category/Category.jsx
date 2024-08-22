import React, { useContext } from 'react'
import './Category.css';
import { categoryData } from '../../Assets/Assets'
import { StoreContext } from '../../Context/Context';
import { IoMan, IoWoman } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { FcElectronics } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";

const Category = () => {

  // FROM CONTEXT
  const {filteredProduct, handleCategory, selectedCategory, setSelectedCategory, } = useContext(StoreContext)

  return (
    <section className='category-bx' id='category'>
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
      <hr/>
    </section>
  )
}

export default Category