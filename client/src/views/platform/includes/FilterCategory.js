import React from 'react'
import { categoryData } from './utils'
import "../../../css/filterCategory.css"



const FilterCategory = ({name,description,img}) => {
  return (
    <div className='filter-category-container'>
        
       <div className='filter-category-card'>
            <h3 className='filter-category-card-name'>{name}</h3>
            {/* <p>{description}</p> */}
            <img className='filter-category-card-img' src={img} alt={name} />
       </div>


    </div>
  )
}

export default FilterCategory