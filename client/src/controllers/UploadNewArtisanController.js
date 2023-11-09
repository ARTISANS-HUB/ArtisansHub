import { Api_connect_server } from '../APIs/Api_connect_server'
import swal from 'sweetalert';


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
				// window.location.reload();
			
				localStorage.setItem('message', message);
				localStorage.setItem('reponse_message_code', 200);
				swal({
					title: "Good job!",
					text: message,
					icon: "success",
					button: "Aww yiss!",
				});
				window.location.href = "/login-artisan";

			} else if (response.data.statusCode === 501) {
				message = response.data.message;
				
				// window.location.reload();
			
				localStorage.setItem('message', message);
				localStorage.setItem('reponse_message_code', 501);

				swal({
					title: "Hmmm..!",
					text: message,
					icon: "warning",
					dangerMode: true,
					button: "Aww yiss!",
				});
			}

		})
		.catch((error) => {
            // alert(error)
			//error 
			// window.location.reload();
			localStorage.setItem('reponse_message_code', 501);
			localStorage.setItem('message', "Couldnt create new artisan user Please, try again");
			swal({
                title: "Hmmm..!",
                text: message,
                icon: "warning",
                dangerMode: true,
                button: "Aww yiss!",
            });
		})
}

export default UploadNewArtisanController