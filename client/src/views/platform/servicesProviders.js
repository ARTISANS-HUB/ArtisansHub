import React from 'react';
import "../../css/serviceProviders.css"
import profilePicture from '../../uploads/bg.jpeg'; 

const ArtisanProfile = (props) => {
  const { name = "John Doe", services } = props;
  // Use the same profile image as a placeholder for services
  const placeholderServiceImages = Array(3).fill(profilePicture);

  return (
    <div className="artisan-profile">
      <div className="profile-header">
        <img src={profilePicture} alt={`${name}'s Profile`} className="profile-picture" />
        <h2>{name}</h2>
      </div>
      <div className="services">
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
        <div className="buttons">
          <button className="book-button">Book</button>
          <button className="call-button">Call</button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
