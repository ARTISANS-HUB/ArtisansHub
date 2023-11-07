import {  Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import  UploadNewBuyerController   from '../../controllers/UploadNewBuyerController';


import { useEffect, useState} from 'react'

const CreateBuyer =  () => {

   let message = localStorage.getItem('message');

  // Function to clear the notification
  // Regular expression for email validation
  const [isLoading, setIsLoading] = useState(false);

// Use useEffect to clear the message in localStorage on component load
  useEffect(() => {
    localStorage.removeItem('message');
  }, []);

//manage user data state 
  const [formData, setformData] = useState({
    userName : '',
    password : '',
    lname:'', fname:'', 
    email:'', phone:'',

   });


const handleChange = async ( event )=>{
     // Update the state when user types in the input fields
     setformData({...formData ,
      [event.target.name] : event.target.value
     });
   
  }

const handleSubmit = async ( event )=>{

  event.preventDefault();
        // Call the userAuthController and pass the user input
    if (formData.userName === '' || formData.password === '') {
      alert('all input are required ');
      return;
    }

    else{
    //set loading
    setIsLoading(true);

    // Simulate an API request (replace this with your actual login logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    UploadNewBuyerController(formData);

    }

  }





return (
<>
<form id="regForm" action="">
  <h1>Register:</h1>
   <div className="tab">Name:
    <p><input placeholder="First name..." value={formData.fname} onChange={handleChange}  oninput="this.className = ''" name="fname" /></p>
    <p><input placeholder="Last name..." value={formData.lname} onChange={handleChange} oninput="this.className = ''" name="lname" /></p>
  </div>
  <div className="tab">Contact Info:
    <p><input placeholder="E-mail..." value={formData.userName} oninput="this.className = ''" name="email" / ></p>
    <p><input placeholder="Phone..." onChange={handleChange} value={formData.userName}oninput="this.className = ''" name="phone" / ></p>
  </div>
  <div className="tab">Birthday:
    <p><input placeholder="dd" onChange={handleChange} value={formData.userName} oninput="this.className = ''" name="dd" /></p>
    <p><input placeholder="mm" onChange={handleChange} value={formData.userName} oninput="this.className = ''" name="nn" /></p>
    <p><input placeholder="yyyy" onChange={handleChange} value={formData.userName} oninput="this.className = ''" name="yyyy" /></p>
  </div>
  <div className="tab">Login Info:
    <p><input placeholder="Username..." onChange={handleChange} value={formData.userName} oninput="this.className = ''" name="uname" /></p>
    <p><input placeholder="Password..." onChange={handleChange} value={formData.userName} oninput="this.className = ''" name="pword" type="password" /></p>
  </div>
  <div className="btns-container" >   
    <div>
      <button type="button" id="prevBtn">Previous</button>
      <button type="button" id="nextBtn" >Next</button>
    </div>
  </div>
    
</form>

</>


  )
}

export default CreateBuyer