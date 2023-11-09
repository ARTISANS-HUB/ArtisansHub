import { Link } from 'react-router-dom';
import { LogoutController } from '../../../../controllers/LogoutController';
import { useState, useEffect } from 'react';
import { Api_connect_server } from '../../../../APIs/Api_connect_server'
import swal from 'sweetalert';

function ArtisandashboardTopNavBar() {
  const [username,] = useState(localStorage.getItem('username'));

  const api_connect = Api_connect_server();
  const profile = localStorage.getItem('profile');

  //fetch user profile
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Fetch the image from the server
    api_connect.get('/auth/fetch-user-profile/' + profile, { responseType: "blob" })
      .then((response) => {
        if (response.status === 200) { // Check the status code for success (200 OK)
          return response.data; // Use response.data for Axios, not response.blob()
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((imageData) => {
        const src = URL.createObjectURL(new Blob([imageData]));
        setImageSrc(src);
      })
      .catch((error) => {
        //console.error('Error fetching image:', error);
      });



  }, [imageSrc, profile, api_connect]);

  const handleLogout = async () => {
    swal({
      title: "Are you sure?",
      text: "Once clicked, you will be loggged out from your dashboard",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((yes) => {
        if (yes) {
          LogoutController();
         
        }
      });
    return;
  }

  return (
    <div className="topnav-home">
      <div className="left-profile">
       <Link to="/auth/artisan/dashboard/home"> <span  >DIGIHAVEN</span></Link>
      </div>
      <div className="right-nav-dashboad-platform">
                
        <Link to="/auth/artisan/dashboard/create-service-artisan"><i title="Create Service" className="create-services-icon  fas fa-plus"></i></Link>
        <Link to="/auth/artisan/dashboard/statistics-service-artisan"><i title="Create Service" className="create-services-icon  fas fa-chart-line"></i></Link>
        



        <nav class="top-nav-platform-dashboard">
          <div class="profile-platform-pic">
            {imageSrc ? (
              <img src={imageSrc} alt="" className="profile-image-dashboard" />
            ) : (

              <img src="../../../uploads/Iphone-spinner-2.gif" alt="" className="profile-image-dashboard" />

            )
            }
            <span class="profile-name-dashbaord-plaform">{username || 'User'}</span>

          </div>
        </nav>


        <Link to="#" onClick={handleLogout}   ><i title="Logout" className="fas fa-sign-out"></i></Link>
      </div>

    </div>
  );
}

export default ArtisandashboardTopNavBar;
