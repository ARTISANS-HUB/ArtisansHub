import React from 'react';
import '../../css/serviceProviders.css'; // Create a CSS file for styling

const serviceProviders = () => {
  return (
    <div className="user-profile">
      <div className="profile-image">
        <img src="user-profile-image.jpg" alt="User Profile" />
      </div>
      <div className="user-info">
        <h2>User's Name</h2>
        <p>Work: Occupation or Job Title</p>
        <p>Email: user@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Artisan Description: A brief description of the user's artistic skills and interests.</p>
      </div>
    </div>
  );
}

export default serviceProviders;
