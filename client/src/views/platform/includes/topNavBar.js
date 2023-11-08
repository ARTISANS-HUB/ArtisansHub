import { Link,useNavigate } from "react-router-dom";
// import "../../../css/createBuyer.css";
import "../../../css/topNavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TopNavBar = () => {
  const navigate = useNavigate();
  
  const handleChange = async (event) => {
    event.preventDefault();

    if (event.target.value === "buyer") {
      navigate("/create-buyer")
    } else if (event.target.value === "artisan") {
      navigate("/create-artisan")
    } else if (event.target.value === "admin") {
      navigate("/login")
    }
  };
  const handleLoginChange = async (event) => {
    event.preventDefault();

    if (event.target.value === "buyer") {
      navigate("/login")
    } else if (event.target.value === "artisan") {
      navigate("/login")
    } else if (event.target.value === "admin") {
      navigate("/login")
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
            <Link to="/contact">Contact</Link>
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
              onChange={handleLoginChange}
              className="become-button"
            >
              <option value="" selected disabled>
                <Link to="#">
                  <i> Login As</i>
                </Link>
              </option>
              <option value="buyer">
                <Link to="/login">
                  <i> Buyer</i>
                </Link>
              </option>
              <option value="artisan">
                <Link to="/login">
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
