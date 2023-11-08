import React from 'react'
import { categoryData } from './utils'
import "../../../css/filterCategory.css"
import { Link } from 'react-router-dom'



const FilterCategory = ({name,img,link}) => {
  return (
    <div className='filter-category-container'>
      
       <div className='filter-category-card'>
            <img className='filter-category-card-img' src={img} alt={name} />
            <div className='filter-category-card-info'>
                <h3>{name}</h3>
                <Link to={link} style={{textDecoration:"none"}}>Book</Link>
            </div>
       </div>

    </div>
  )
}

export default FilterCategory