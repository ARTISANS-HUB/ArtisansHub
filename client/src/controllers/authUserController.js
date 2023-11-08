
// controllers/authUser.js
// import authuserCrendentialsModel from '../models/authuserCrendentials';
// import authenticateArtisanModel from '../models/authArtisansCrendentials';
// import authenticateBuyerModel from '../models/authBuyerCrendentials';
import {Api_connect_server} from '../APIs/Api_connect_server'
let Userdata = [];
let message;
let statusCode;
let token;
let api_connect;  
const authUserAdminController = ( formData ) => {
	// Handle user input, e.g., perform authentication
const { userName , password } = formData;
//do data cleaning here 

api_connect =  Api_connect_server();

//make post request to databse
api_connect.post('/login/admin',{ userName , password })
.then ( ( response ) =>{

message = response.data.message;
Userdata = response.data.userData;
statusCode = response.data.statusCode;
token = response.token;
//check for response
if (statusCode===200){
      //user found
      localStorage.setItem('token', token);
      localStorage.setItem('message', message);
      localStorage.setItem('statusCode',statusCode);
      localStorage.setItem('usermail',Userdata.usermail);
      localStorage.setItem('password',Userdata.password);
      localStorage.setItem('username',Userdata.username);
      localStorage.setItem('userID',Userdata.userID);
      localStorage.setItem('profile',Userdata.profile);
      localStorage.setItem('tel',Userdata.tel);
      localStorage.setItem('role',Userdata.role);
      localStorage.setItem('created_at',Userdata.created_at);
      localStorage.setItem('updated_at',Userdata.updated_at);
      localStorage.setItem('isAuthenticated', true);

      window.location.href = '/auth/dashboard';

     //alert(message);
return true;

 }
else if (statusCode===404) {
//not found
message = response.data.message;
localStorage.setItem('message',message );
localStorage.setItem('isAuthenticated', false);


return false;

 }
else if (statusCode===401) {
//not found
message = response.data.message;
localStorage.setItem('message',message );
localStorage.setItem('isAuthenticated', false);
//alert(message);

return false;

 }
})
.catch( ( error ) =>{

 console.log("cannot fetch user " +error);
localStorage.setItem('message',"Please , Try again" );
localStorage.setItem('isAuthenticated', false);
});



}

const authArtisanController = ( formData ) => {

 const { userName , password } = formData;
 
api_connect =  Api_connect_server();

//make post request to databse
api_connect.post('/login/artisan',{ userName , password })
.then ( ( response ) =>{

message = response.data.message;
Userdata = response.data.userData;
statusCode = response.data.statusCode;
token = response.token;
//check for response
if (statusCode===200){
      //user found
      localStorage.setItem('token', token);
      localStorage.setItem('message', message);
      localStorage.setItem('statusCode',statusCode);
      localStorage.setItem('usermail',Userdata.usermail);
      localStorage.setItem('password',Userdata.password);
      localStorage.setItem('username',Userdata.username);
      localStorage.setItem('userID',Userdata.userID);
      localStorage.setItem('profile',Userdata.profile);
      localStorage.setItem('tel',Userdata.tel);
      localStorage.setItem('role',Userdata.role);
      localStorage.setItem('created_at',Userdata.created_at);
      localStorage.setItem('updated_at',Userdata.updated_at);
      localStorage.setItem('isAuthenticated', true);

      window.location.href = '/auth/artisan/dashboard/home';

     //alert(message);
return true;

 }
else if (statusCode===404) {
//not found
message = response.data.message;
localStorage.setItem('message',message );
localStorage.setItem('isAuthenticated', false);


return false;

 }
else if (statusCode===401) {
//not found
message = response.data.message;
localStorage.setItem('message',message );
localStorage.setItem('isAuthenticated', false);
//alert(message);

return false;

 }
})
.catch( ( error ) =>{

 console.log("cannot fetch user " +error);
localStorage.setItem('message',"Please , Try again" );
localStorage.setItem('isAuthenticated', false);
});



}


const authBuyerController = ( formData ) => {

 const { userName , password } = formData;
 
api_connect =  Api_connect_server();

//make post request to databse
api_connect.post('/login/buyer',{ userName , password })
.then ( ( response ) =>{

message = response.data.message;
Userdata = response.data.userData;
statusCode = response.data.statusCode;
token = response.token;
//check for response
if (statusCode===200){
      //user found
      localStorage.setItem('token', token);
      localStorage.setItem('message', message);
      localStorage.setItem('statusCode',statusCode);
      localStorage.setItem('usermail',Userdata.usermail);
      localStorage.setItem('password',Userdata.password);
      localStorage.setItem('username',Userdata.username);
      localStorage.setItem('userID',Userdata.userID);
      localStorage.setItem('profile',Userdata.profile);
      localStorage.setItem('tel',Userdata.tel);
      localStorage.setItem('role',Userdata.role);
      localStorage.setItem('created_at',Userdata.created_at);
      localStorage.setItem('updated_at',Userdata.updated_at);
      localStorage.setItem('isAuthenticated', true);

      window.location.href = '/auth/buyer/dashboard/home';

     //alert(message);
return true;

 }
else if (statusCode===404) {
//not found
message = response.data.message;
localStorage.setItem('message',message );
localStorage.setItem('isAuthenticated', false);


return false;

 }
else if (statusCode===401) {
//not found
message = response.data.message;
localStorage.setItem('message',message );
localStorage.setItem('isAuthenticated', false);
//alert(message);

return false;

 }
})
.catch( ( error ) =>{

 console.log("cannot fetch user " +error);
localStorage.setItem('message',"Please , Try again" );
localStorage.setItem('isAuthenticated', false);
});



}


export  { 
authUserAdminController 
,authArtisanController
,authBuyerController

}