import React from 'react'
import { categoryData } from './utils'
import "../../../css/filterCategory.css"


const FilterCategory = ({name,description}) => {
  return (
    <div className='filter-category-container'>
        
       <div className='filter-category-card'>
            <h3 className='filter-category-card-name'>{name}</h3>
            <p>{description}</p>
       </div>


    </div>
  )
}

export default FilterCategory