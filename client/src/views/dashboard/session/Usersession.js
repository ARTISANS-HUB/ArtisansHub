
const Usersession = async () => {

	//checking user authentication
	let isAuthenticated = localStorage.getItem('isAuthenticated');

	if (isAuthenticated === "false" || isAuthenticated === null || isAuthenticated === '') {
		window.location.href = '/login';
	}

}



export default Usersession 