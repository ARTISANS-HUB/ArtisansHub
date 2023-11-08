import { Api_connect_server } from '../APIs/Api_connect_server'
const api_connect = Api_connect_server();

const UploadNewArtisanController = async (formData, file) => {

	let message;
	api_connect.post('/auth/create-artisan',
		{ formData, file }, { headers: { 'Content-Type': 'multipart/form-data' }, })

		.then((response) => {

			if (response.data.statusCode === 200) {
				message = response.data.message;

				//clear session name
				localStorage.removeItem("username_new_user");
				window.location.reload();
				localStorage.setItem('message', message);
				localStorage.setItem('reponse_message_code', 200);
			} else if (response.data.statusCode === 501) {
				message = response.data.message;
				console.log(message)
				window.location.reload();
				localStorage.setItem('message', message);
				localStorage.setItem('reponse_message_code', 501);
			}

		})
		.catch((error) => {

			//error 
			console.log(error)
			window.location.reload();
			localStorage.setItem('reponse_message_code', 501);
			localStorage.setItem('message', "Couldnt create new user Please, try again");

			//alert('server error');
			console.log('file received at controller error ');

		})
}

export default UploadNewArtisanController