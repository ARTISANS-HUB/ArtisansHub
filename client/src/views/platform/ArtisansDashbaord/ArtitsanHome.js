import ArtisandashboardTopNavBar from "./includes/ArtisandashboardTopNavBar"
import ArtisanDashboardTable from './ArtisanDashboardTable';

 
const ArtitsanHome = () => {
  return (
   < div >
    <ArtisandashboardTopNavBar />
    <h1 className="artitablehome">Artisan Dashboard</h1>
    < ArtisanDashboardTable  />

    </div>
  )
}

export default ArtitsanHome