import React from 'react'
import { Link } from 'react-router-dom';
import  {LogoutController}  from '../../../../controllers/LogoutController';

const BuyerdashboardTopNavBar = () => {

    const handleLogout = async () =>{
		await LogoutController();
		return;
	}


  return (
    <div className="topnav-home">
    <div className="left-profile">
      <span>DIGIHAVEN</span>
    </div>
    <div className="right-nav">

      <Link to="/services">DANIEL</Link>

      <Link to="#" onClick={handleLogout}><i className="fas fa-sign-out"></i> Logout</Link>
    </div>
   
  </div>
  )
}

export default BuyerdashboardTopNavBar