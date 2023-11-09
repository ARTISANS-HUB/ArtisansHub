import React from 'react'
import { Link } from 'react-router-dom'
import  "../../../css/artisanCard.css";
import ArtisanProfile from '../servicesProviders'



const ArtisanCard = ({username,location,artisanId,img}) => {
  
  return (
    <div className='artisan-card' >
        <div className='artisan-card-upper'>
            <img src={img} alt='artisan' className='artisan-img'/>
        </div>
        <div className='artisan-card-middle'>
           <h3>{username}</h3>
           <p>{location}</p>
        </div>
        <div className='artisan-card-bottom'>
           <Link to={`/service-provider/${artisanId}`} style={{textDecoration:"none"}}>
                <button className='artisan-card-btn'>More</button>
           </Link>
        </div>
    </div>
  )
}

export default ArtisanCard