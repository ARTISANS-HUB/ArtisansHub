import { Api_connect_server } from '../APIs/Api_connect_server'

const LogoutController = async () => {

	const api_connect = Api_connect_server();

	let message;
	//send respond to clear user session
	api_connect.get('/logout/users', {})
		.then((response) => {

			if (response.data.statusCode === 200) {
				message = response.data.message;
				localStorage.removeItem('message');
				localStorage.removeItem('Userdagetta');
				localStorage.removeItem('username');
				localStorage.removeItem('profile');
				console.log("user logged out")
				localStorage.setItem('isAuthenticated', false);
				// Perform a full page reload to ensure redirection
				window.location.href = '/';
			} else if (response.data.statusCode === 501) {

				message = response.data.message;
				localStorage.setItem('message', message);
			}

		})
		.catch((error) => {

			//error 
			//console.log(error);
			//alert('internal error...');
			localStorage.setItem('message', 'Try again..');


		})
}

export { LogoutController }