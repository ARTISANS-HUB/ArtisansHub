import { Link } from "react-router-dom";
// import "../../../css/createBuyer.css";
import "../../../css/topNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  const [menuOpen, setMenuOpen] = useState(false);

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
        
            <input type="text" placeholder="Search" />
          
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
          
          <li>
            <select
              id="selectOption"
              onChange={handleChange}
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
              onChange={handleChange}
              className="become-button"
            >
              <option value="" selected disabled>
                <Link to="#">
                  <i> Login As</i>
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
            <FontAwesomeIcon icon={faBell} className="notification-bell" />
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
