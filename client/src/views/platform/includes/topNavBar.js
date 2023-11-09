import "../../../css/topNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import  {LogoutController}  from '../../../controllers/LogoutController';
import { useEffect ,useState} from 'react'
import {Api_connect_server} from '../../../APIs/Api_connect_server'
import swal from 'sweetalert';

const TopNavBar = () => {
   const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  let isAuthenticated = localStorage.getItem('isAuthenticated');

  const api_connect =  Api_connect_server();

  const handleChangeCreate = async (event) => {
    event.preventDefault();
     if (event.target.value === "buyer") {
      navigate("/create-buyer")
    } else if (event.target.value === "artisan") {
      navigate("/create-artisan")
    } else if (event.target.value === "admin") {
      navigate("/login")
    }
  };

const handleChangeLogin = async (event) => {
            event.preventDefault();

      if (event.target.value === "buyer") {
      navigate("/login")
    } else if (event.target.value === "artisan") {
      navigate("/login")
    } else if (event.target.value === "admin") {
      navigate("/login")
    }
      }

// check user state

const [userType, setuserType] = useState("artisan");


const handleLogout = async () =>{
  swal({
    title: "Are you sure?",
    text: "Once clicked, you will be loggged out from your dashboard",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then( (yes) => {
    if (yes) {
       LogoutController();
    } 
  });
  return;
}

  const username = localStorage.getItem('username');

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
    console.error('Error fetching image:', error);
  });

      //check


  }, [imageSrc ,profile,api_connect ]);



  return (
 

    <nav>
      <div className="navbar">
        <Link to="/" className="title">
          DIGIHAVEN
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className="search-bar">
        
        <input type="text" placeholder="Search"   />
          
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          <li>
            <select
              id="selectOption"
              onChange={handleChangeCreate}
              className="become-button"
            >
              <option value="" selected disabled>
                <Link to="#">
                  <i> Become</i>
                </Link>
              </option>
              <option value="buyer">
                <Link to="/become-buyer">
                  <i> Buyer</i>
                </Link>
              </option>
              <option value="artisan">
                <Link to="/become-artisan">
                  <i> Artisan</i>
                </Link>
              </option>

             
            </select>
          </li>
          <li>
            <select
              id="selectOption"
              onChange={handleChangeLogin }
              className="become-button"
            >
              <option value="" selected disabled>
                <Link to="#">
                  <i> Login As</i>
                </Link>
              </option>
              <option value="buyer">
                <Link to="#">
                  <i> Buyer</i>
                </Link>
              </option>
              <option value="artisan">
                <Link to="#">
                  <i> Artisan</i>
                </Link>
              </option>

             
            </select>
          </li>


{ isAuthenticated &&

<li>
<FontAwesomeIcon icon={faBell} className="notification-bell" />
</li>

}


{ isAuthenticated &&


<li>
<div className="account-container .platform-profile">
{ imageSrc ? (  
    <img src={imageSrc} alt="" className="userprofile" />
 ):(

    <img src="../../uploads/Iphone-spinner-2.gif" alt="" className="platform-profil-ic" />
 )
  }

    <div className="account-dropdown">

      <div className="account-item"  id="username">
        Daniel
      </div>


      
       { userType === "buyer" && 
     <>
      <Link className="account-item" to="/auth/dashboard/profile">
        <i className="fas fa-user-circle"></i> Profile
      </Link>   

      <Link className="account-item" to="/auth/buyer/dashboard/home">
        <i className="fas fa-home"></i> Dashboard
      </Link>
      <Link className="account-item" to="#">
        <i className="fas fa-cog"></i> Settings
      </Link>

      <Link className="account-item" to="#" onClick={handleLogout} id="logoutButton" >
        <i className="fas fa-sign-out"></i> Logout
      </Link>
      </>

    }



      { userType === "artisan" &&
      <>
      <Link className="account-item" to="/auth/dashboard/profile">
        <i className="fas fa-user-circle"></i> Profile
      </Link>
      <Link className="account-item" to="/auth/artisan/dashboard/home">
        <i className="fas fa-home"></i> Dashboard
      </Link>

      <Link className="account-item" to="#">
        <i className="fas fa-cog"></i> Settings
      </Link>

      <Link className="account-item" to="#" onClick={handleLogout} id="logoutButton" >
        <i className="fas fa-sign-out"></i> Logout
      </Link>
      </>
      }
      

    </div>
  </div>
</li>
}

        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
