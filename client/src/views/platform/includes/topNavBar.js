import { Link } from "react-router-dom";
// import "../../../css/createBuyer.css";
import "../../../css/topNavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-solid-svg-icons"

const TopNavBar = () => {
  const handleChange = async (event) => {
    event.preventDefault();

    if (event.target.value === "buyer") {
      window.location.href = "/create-buyer";
    } else if (event.target.value === "artisan") {
      window.location.href = "/create-artisan";
    } else if (event.target.value === "admin") {
      window.location.href = "/login";
    }
  };


  return (
    <nav>
      <div className="TopNavBar-platform">
        <div className="TopNavBar-platform-inner">
          <div className="logo">
            <Link>DiGiHaven</Link>
          </div>
          <div className="search-bar ">
            <input type="text" placeholder="search" />
          </div>

          <div className="navbar">
            <div className="contact">
              <i>Contact</i>
            </div>
            <div>
              <select id="selectOption" onChange={handleChange} className="become-button">
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

                <option value="admin">
                  <Link to="#">
                    <i> Admin Login </i>
                  </Link>
                </option>
              </select>
            </div>
            <div className="notification">
                  <FontAwesomeIcon icon={faBell}/>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
