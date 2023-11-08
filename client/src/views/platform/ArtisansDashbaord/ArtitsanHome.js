import ArtisandashboardTopNavBar from "./includes/ArtisandashboardTopNavBar"
import ArtisanDashboardTable from './ArtisanDashboardTable';

 
const ArtitsanHome = () => {
  return (
   < div >
    <ArtisandashboardTopNavBar />
    <h1 className="artitablehome">     <span className="title-top-platform"><i className="fas fa-tachometer"></i> Dashbaord > <i className="fas fa-home"></i>  Home</span>
</h1>
    < ArtisanDashboardTable  />

    </div>
  )
}

export default ArtitsanHome