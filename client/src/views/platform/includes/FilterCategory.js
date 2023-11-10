import React, { useEffect, useState } from 'react'
import { categoryData } from './utils'
import "../../../css/filterCategory.css"
import { Link, useNavigate } from "react-router-dom";

const FilterCategory = ({type,img,artisanId , serviceId}) => {
const navigate = useNavigate();



const handleRedirect = async ( event)=>{

//navigate("/auth/customer/book-service");

let artisanId = event.target.getAttribute("artisanId");
let serviceId = event.target.getAttribute("serviceId");

localStorage.setItem('serviceId-book', serviceId);
localStorage.setItem('artisanId-book', artisanId);

window.location.href='/auth/customer/book-service';


}

  return (
    <div className='filter-category-container'>
      
       <div className='filter-category-card'>
            <img className='filter-category-card-img' src={process.env.REACT_APP_API_URL_DEV + "/auth/fetch-user-profile/"+img} alt={img} />
            <div className='filter-category-card-info'>
                <h3>{type}</h3>

                <Link to="#" 
                onClick={handleRedirect} 
                artisanId={artisanId} 
                 serviceId={serviceId} style={{textDecoration:"none"}}>Book</Link>
               
            </div>
       </div>

    </div>
  )
}

export default FilterCategory