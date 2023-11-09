import React from 'react';
import "../../css/serviceProviders.css"
import profilePicture from '../../uploads/bg.jpeg'; 
import TopNavBar from "./includes/topNavBar";
import PlatformFooter from "./includes/platformFooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPhone } from "@fortawesome/free-solid-svg-icons";

const ArtisanProfile = (props) => {
  const { name = "John Doe", email = "johndoe123@example.com", services } = props;
  
  const placeholderServiceImages = Array(4).fill(profilePicture);

  return (
  <div className='artisanProfileContainer'>
    <TopNavBar/>
      <div className="artisan-profile animated-fade-in">
      <div className="profile-header animated-bounce">
        <img src={profilePicture} alt={`${name}'s Profile`} className="profile-picture" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <div className="buttons animated-fade-in">
         <FontAwesomeIcon icon={faPhone} className='book-button'/>
          <FontAwesomeIcon icon={faBook} className='call-button'/>
        </div>
      <div className="services animated-slide-in">
        <h3>Services</h3>
        <div className="service-grid">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <img key={index} src={service.image} alt={service.name} className="service-image" />
            ))
          ) : (
            placeholderServiceImages.map((image, index) => (
              <img key={index} src={image} alt={`Service ${index + 1}`} className="service-image" />
            ))
          )}
        </div>
        
      </div>
    </div>
    <PlatformFooter/>
  </div>
  );
};

export default ArtisanProfile;
