import React from 'react'
import { Link } from 'react-router-dom'
import "../../../css/artisanCard.css";


const ArtisanCard = ({name,description,link,img}) => {
  
  return (
    <div className='artisan-card'>
        <div className='artisan-card-upper'>
            <img src={img} alt='artisan' className='artisan-img'/>
        </div>
        <div className='artisan-card-middle'>
           <h3>{name}</h3>
           <p>{description}</p>
        </div>
        <div className='artisan-card-bottom'>
           <Link to='./serviceProviders' style={{textDecoration:"none"}}>
                <button className='artisan-card-btn'>More</button>
           </Link>
        </div>
    </div>
  )
}

export default ArtisanCard