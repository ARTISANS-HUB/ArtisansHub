import React from 'react'
import { categoryData } from './utils'
import "../../../css/filterCategory.css"
import { Link } from 'react-router-dom'



const FilterCategory = ({type,img,bookId}) => {
  return (
    <div className='filter-category-container'>
      
       <div className='filter-category-card'>
            <img className='filter-category-card-img' src={img} alt={type} />
            <div className='filter-category-card-info'>
                <h3>{type}</h3>
                <Link to={`/auth/customer/book-service/${bookId}`} style={{textDecoration:"none"}}>Book</Link>
            </div>
       </div>

    </div>
  )
}

export default FilterCategory