import BuyerDashboardTable from "./BuyerDashboardTable"
import BuyerdashboardTopNavBar from "./includes/BuyerdashboardTopNavBar"

const BuyerHome = () => {
  return (

    < div >
    <BuyerdashboardTopNavBar />
    <h1 className="artitablehome">Buyer Dashboard</h1>
    < BuyerDashboardTable  />

    </div>

  )
}

export default BuyerHome