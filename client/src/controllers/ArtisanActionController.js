import axios from "axios";
import {Api_connect_server} from '../APIs/Api_connect_server'

let message;

const ApproveArtisanController = async (artisanId) => {
	

let api_connect =  Api_connect_server();

//send respond to delete user 
api_connect.delete('/auth/approve-artisan/'+artisanId)
.then((response)=>{

if(response){
if (response.data.statusCode===200 ) {
message = response.data.message;
localStorage.setItem('message', message);
localStorage.setItem('reponse_message_code', response.data.statusCode);
window.location.reload();

}else if(response.data.statusCode===501){
message = response.data.message;
localStorage.setItem('message', message);
localStorage.setItem('reponse_message_code', response.data.statusCode);
window.location.reload();

 }	
}


})
.catch((error)=>{
if(error){
message = error.data.message;
localStorage.setItem('message', message);
localStorage.setItem('reponse_message_code', error.data.statusCode);

}
})

}



const RejectArtisanController = async (artisanId) => {
let api_connect =  Api_connect_server();

//send respond to delete user 
api_connect.delete('/auth/reject-artisan/'+artisanId)
.then((response)=>{

if(response){
if (response.data.statusCode===200 ) {
message = response.data.message;
localStorage.setItem('message', message);
localStorage.setItem('reponse_message_code', response.data.statusCode);
window.location.reload();

}else if(response.data.statusCode===501){
message = response.data.message;
localStorage.setItem('message', message);
localStorage.setItem('reponse_message_code', response.data.statusCode);
window.location.reload();

 }	
}


})
.catch((error)=>{
if(error){
message = error.data.message;
localStorage.setItem('message', message);
localStorage.setItem('reponse_message_code', error.data.statusCode);

}
})

}

export  { ApproveArtisanController, RejectArtisanController }