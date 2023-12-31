//includes
import Topnav from '../dashboard/includes/TopNav'
import Footer from '../dashboard/includes/Footer'
// importing components

import SideBar from '../dashboard/includes/SideBar'


import ProfilePageFormPartial from '../dashboard/ProfilePageFormPartial'
import '../../css/profile.css';
import { useEffect, useState } from 'react'

//import updateUserProfileController

import updateUserProfileController from '../../controllers/updateUserProfileController'

import { Api_connect_server } from '../../APIs/Api_connect_server'
//importing session
import Usersession from '../dashboard/session/Usersession'


//home function
const ProfilePage = () => {
  const api_connect = Api_connect_server();
  //initiate  to check user session
  Usersession();
  const userID_temp = localStorage.getItem('userID');

  const getResponseMsg = localStorage.getItem('message');
  const reponse_message_code = localStorage.getItem('reponse_message_code');
  const [userID, setuserID] = useState("");

  const [dragOver, setDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDropPreview = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const file_name = e.dataTransfer.files[0].name;
    localStorage.setItem('profile_updated', file_name);
    localStorage.removeItem('profile');

    //alert(file_name);

    //if true, send file to controller
    if (file) {

      setSelectedImage(URL.createObjectURL(file));
      //update user profile with uploaded
      setuserID(userID_temp);

      setDragOver(false);

      updateUserProfileController(file, userID);

    }

  };





  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    // setResponseMessage(getResponseMsg);
  };

  const handleDragLeave = () => {
    setDragOver(false);
    //setResponseMessage(getResponseMsg);
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const file_name = e.target.files[0].name;
    localStorage.setItem('profile_updated', file_name);
    localStorage.removeItem('profile');



    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setuserID(userID_temp);
      // If you want to upload the image to the server, call handleUpload
      updateUserProfileController(file, userID);
    }
  };

  const username = localStorage.getItem('username');
  const profile_old = localStorage.getItem('profile');
  const profile_updated = localStorage.getItem('profile_updated');

  let profile;

  if (profile_old) {
    profile = profile_old;
    //console.log("old " + profile);
  } else {
    profile = profile_updated;
    //console.log("new " + profile);
  }


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
        console.error('Error fetching image:', error);
      });

    //check



    //handle notifications
    function closeNotificationSuccess() {
      const notification = document.getElementById('notification-success');
      if (notification !== null) {
        notification.style.display = 'none';
      }
    }

    function closeNotificationError() {
      const notification = document.getElementById('notification-error');
      if (notification !== null) {
        notification.style.display = 'none';
      }
    }

    const sucess_close_btn = document.getElementById('sucess_close_btn');

    const error_close_btn = document.getElementById('error_close_btn');


    //add listeners sucess
    if (sucess_close_btn) {
      sucess_close_btn.addEventListener('click', closeNotificationSuccess);
    }


    if (error_close_btn) {
      error_close_btn.addEventListener('click', closeNotificationError);
    }


    ///remove listeners after 
    return (() => {

      if (sucess_close_btn) {
        sucess_close_btn.removeEventListener('click', closeNotificationSuccess);
      }


      if (error_close_btn) {
        error_close_btn.removeEventListener('click', closeNotificationError);
      }

    });


  }, [imageSrc, profile, api_connect]);


useEffect(() => {

    setTimeout(() => {
      localStorage.removeItem('message');
      localStorage.removeItem('reponse_message_code');

    }, 6000)


  }, [reponse_message_code]);


  return (

    <div className="dashboard-body">

      <SideBar />

      <section className="dashboard">

        <Topnav />


        <div className="dash-content">



          {   /*over view*/}


          <div className="profile-container">
            <span className="title-top"><i className="fas fa-tachometer"></i> Dashbaord {'>'} <i className="fas fa-user"></i>  Profile</span>

            <div className="container-left">

              <h1 style={{ textTransform: 'upperCase' }}   >{username}</h1>

              {selectedImage ? (

                <img src={selectedImage} alt="Selected" className="userprofil-edit" />

              ) : (


                imageSrc ? (
                  <img src={imageSrc} alt="fetched" className="userprofil-edit" />

                ) : (

                  profile_updated && imageSrc ? (
                    <img src={profile_updated} alt={profile_updated} className="userprofil-edit" />

                  ) : (
                    <img src={"../../uploads/Iphone-spinner-2.gif"} style={{ width: '100px', height: '100px' }} alt="default gif" className="userprofil-edit" />

                  )

                )



              )
              }


              <div
                onDrop={handleDropPreview}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                  border: dragOver ? '3px dashed #333' : '2px dashed #ccc',
                }}
                className="uploads-drop"
              >
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  name="fileUpload"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput" className="lbl-input" title="Click to select" >Select an Image</label>
                <p className="mobile-hide" >or</p>
                <span className="mobile-hide" > Drag & Drop an Image </span>
              </div>


            </div>

            <div className="container-right">
              <ProfilePageFormPartial />
            </div>

          </div>


        </div>


        {!getResponseMsg === "" && reponse_message_code === 200 && (

          <div className="notification-success" id="notification-success">
            <span className="inner-notifications" >
              <div> {getResponseMsg}</div>
              <div className="close-button" id="sucess_close_btn" title="Close" >x</div>
            </span>
          </div>
        )

        }


        {!getResponseMsg === "" && reponse_message_code === 501 && (
          <div className="notification-error" id="notification-error">
            <span className="inner-notifications" >
              <div> {getResponseMsg}</div>
              <div className="close-button" id="error_close_btn" title="Close" >x</div>
            </span>
          </div>
        )}

      </section>


      < Footer />
    </div>


  );
}


export default ProfilePage