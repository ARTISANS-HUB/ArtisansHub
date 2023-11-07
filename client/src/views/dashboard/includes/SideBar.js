
import { Link} from 'react-router-dom';
import { useEffect} from 'react'

const SideBar = () => {


  useEffect(() => {
    const body = document.querySelector("body");
    let sidebar = body.querySelector("nav");
    let sidebarToggle = body.querySelector(".sidebar-toggle");


    function handleSidebarToggle() {
      sidebar.classList.toggle("close");
      if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
      } else {
        localStorage.setItem("status", "open");
      }
    }



     sidebarToggle.addEventListener("click", handleSidebarToggle);

    // Cleanup function to remove event listeners
    return () => {
       sidebarToggle.removeEventListener("click", handleSidebarToggle);
    };
  }, []);

	return (
      <nav  className="dashboard-nav"  >
        <div className="logo-name">

            <div className="logo-image">
                <img src="" alt="" / >
            </div>

            <span className="logo_name">DigiHaven</span>
        </div>

        <div className="dashboard-menu-items">
            
            <ul className="dashboard-nav-links">
                <li><Link to="/auth/dashboard">
                    <i className="uil uil-estate"></i>
                    <span className="link-name">Dahsboard</span>
                </Link></li>
                <li><Link to="/auth/dashboard/users">
                    <i className="uil uil-user"></i>
                    <span className="link-name">Users</span>
                </Link>
                 </li>
                <li>
                <Link to="/auth/dashboard/artisans">
                    <i className="uil uil-user"></i>
                    <span className="link-name">Artisans</span>
                </Link>
                </li>
                <li><Link to="/auth/dashboard/services">
                    <i className="uil uil-user"></i>
                    <span className="link-name">Services</span>
                </Link>
                </li>
                <li>
                <Link to="/auth/dashboard/buyers">
                    <i className="uil uil-user"></i>
                    <span className="link-name">Buyers</span>
                </Link>
                </li>

                <li><Link to="#">
                    <i className="uil uil-chart"></i>
                    <span className="link-name">Analytics</span>
                </Link></li>
                <li><Link to="#">
                    <i className="uil uil-thumbs-up"></i>
                    <span className="link-name">Favorites</span>
                </Link></li>
                <li><Link to="#">
                    <i className="uil uil-comments"></i>
                    <span className="link-name">Comments</span>
                </Link></li>
                <li>
                    <Link to="#">
                    <i className="uil uil-comments"></i>
                    <span className="link-name">Feebacks</span>
                </Link>
                </li>
                 <li>
                    <Link to="#">
                    <i className="uil uil-share"></i>
                    <span className="link-name">Share</span>
                </Link>
                </li> 



            </ul>
            
             
        </div>
    </nav>
   
	)
}



export default SideBar