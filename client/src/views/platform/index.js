import TopNavBar from "../platform/includes/topNavBar";
import PlatformFooter from "../platform/includes/platformFooter";
import "../../css/platform.css";
import Banner from "./includes/Banner";
import ServiceCategory from "./includes/ServiceCategory";
import FilterCategory from "./includes/FilterCategory";
<<<<<<< HEAD
import TopNav from "./includes/topNavBar"
const Index = () => {
	return (
		<div>
		<TopNav/>

=======
import ArtisansCard from "./includes/ArtisansCard";

const Index = () => {
	return (
		<div>
	
		<TopNavBar/>
>>>>>>> c702fbde9e71d04f3fa62c0e6ec479628eb204a0
		<Banner/>
		<ServiceCategory/>
		<ArtisansCard/>
	

	
			
		</div>
	)
}

export default Index