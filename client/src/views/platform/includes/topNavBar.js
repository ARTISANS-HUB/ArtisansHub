
import { Link } from "react-router-dom";
import "../../../css/createBuyer.css";
const TopNavBar = () => {


      const handleChange = async (event) => {
            event.preventDefault();

            if (event.target.value === "buyer") {

            window.location.href = '/create-buyer';

            } else if (event.target.value === "artisan") {
            
            window.location.href = '/create-artisan';

            }

            else if (event.target.value === "admin") {
                  window.location.href = '/login';


            }
      }
      return (
            <div className="TopNavBar-platform" >
                  <div className="TopNavBar-platform-inner">

                        <Link to="/" >
                              <i> Home</i>
                        </Link>

                        <Link to="/auth/customer/book-service" >
                              <i> book services</i>
                        </Link>

                        <Link to="/services" >
                              <i> Services</i>
                        </Link>

                        <Link to="/services-provider" >
                              <i> Services providers </i>
                        </Link>

                        <Link to="/about" >
                              <i> About</i>
                        </Link>

                        <Link to="/contact" >
                              <i> contact</i>
                        </Link>

                        <Link to="/auth/artisan/dashboard/home" >
                              <i> My Artisan Dashoard</i>
                        </Link>

                        <Link to="/auth/buyer/dashboard/home" >
                              <i> My Buyer Dashoard</i>
                        </Link>

                        <Link to="/auth/buyer/dashboard/home" >
                        <i> My Buyer Dashoard</i>
                        </Link>



                        <Link to="/auth/customer/book-history" >
                              <i> Booking history</i>
                        </Link>


                        <Link to="/login" >
                              <i> Login</i>
                        </Link>

                        <select id="selectOption" onChange={handleChange} >
                              <option value="" selected disabled >
                                    <Link to="#" >
                                          <i> Become</i>
                                    </Link></option>
                              <option value="buyer">
                                    <Link to="/become-buyer" >
                                          <i> Buyer</i>
                                    </Link></option>
                              <option value="artisan">
                                    <Link to="/become-artisan" >
                                          <i> Artisan</i>
                                    </Link>
                              </option>

                              <option value="admin">
                                    <Link to="#" >
                                          <i> Admin Login </i>
                                    </Link>
                              </option>
                        </select>
                  </div>
            </div>
      )
}

export default TopNavBar