import React from 'react'
import './Category.css'
import { categoryData } from '../../Assets/Assets'


const Category = ({category, setCategory}) => {

  
  return (
    <div className='explore--menu' id='explore--menu'>
      <div className='category-statement-bx'>
        <h2 className='category-header-txt'>Explore our category</h2>
        <p className='category-statement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia est quis libero convallis, quis sodales diam posuere.</p>
      </div>
      <div className='category-menu-bx'>
        { categoryData.map((category, index) => {
          return (
            <div className='category--bx' key={index}>
              <div className='category-img--bx'>
                <img className='category-img' src={category.image} alt='Category name'/>
              </div>
              <p className='category--name'>{category.name}</p>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default Category