import React from 'react'
import "../../../css/serviceCategory.css";

const Categories = ({icon,title,bgColor,filterCards}) => {
  return (
    <div className='category-container'>
      
        <button className='category-card' onClick={filterCards} style={{backgroundColor:bgColor}}>
            <div className='category-card-icon'>{icon}</div>
            <div className='category-card-text'>{title}</div>
        </button>
     </div>
  )
}

export default Categories