import React from 'react'
import ArtisandashboardTopNavBar from "./includes/ArtisandashboardTopNavBar"
import CreateServiceForm from "./CreateServiceForm"

const ArtisanCreateServicesForm = () => {
  return (
    <div>
       <ArtisandashboardTopNavBar />
      <h1 className="artitablehome">     <span className="title-top-platform"><i className="fas fa-tachometer"></i> Dashbaord {'>'} <i className="fas fa-home"></i>  Create</span>
      </h1>
      < CreateServiceForm />
    </div>
  )
  }
export default ArtisanCreateServicesForm;
