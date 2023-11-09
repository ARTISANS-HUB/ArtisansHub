import { Api_connect_server } from '../APIs/Api_connect_server'
import swal from 'sweetalert';

const UploadNewBuyerController = async (formData, file) => {

	const api_connect = Api_connect_server();

	
	let message; 
	api_connect.post('/auth/create-buyer',
		{ formData, file }, { headers: { 'Content-Type': 'multipart/form-data' }, })

		.then((response) => {

			if (response.data.statusCode === 200) {
				message = response.data.message;

				//clear session name
				localStorage.removeItem("username_new_user");
				window.location.reload();
				localStorage.setItem('message', message);
				localStorage.setItem('reponse_message_code', 200);
				swal({
					title: "Good job!",
					text: message,
					icon: "success",
					button: "Aww yiss!",
				});
				window.location.href = "/login-buyer";
			} else if (response.data.statusCode === 501) {
				message = response.data.message;
				window.location.reload();
				localStorage.setItem('message', message);
				localStorage.setItem('reponse_message_code', 501);
			}

		})
		.catch((error) => {

			//error 
			window.location.reload();
			localStorage.setItem('reponse_message_code', 501);
			localStorage.setItem('message', "Couldnt create new buyer Please, try again");


		})


}

export default UploadNewBuyerController