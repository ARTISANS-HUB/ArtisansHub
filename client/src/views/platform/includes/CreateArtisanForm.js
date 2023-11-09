import React, {useState} from 'react'
import "../../../css/createArtisans.css";
import { useFormik } from 'formik';
import { Api_connect_server } from '../../../APIs/Api_connect_server';
import UploadNewBuyerController from '../../../controllers/UploadNewBuyerController';

const api_connect = Api_connect_server();

// const validate = values => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = 'Required';
//     } else if (values.username.length > 15) {
//       errors.username = 'Must be 15 characters or less';
//     }
  
//     if (!values.password) {
//       errors.password = 'Required';
//     } else if (values.password.length <= 8) {
//       errors.password = 'Must be 8 characters or more';
//     }
  
//     if (!values.usermail) {
//       errors.usermail = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usermail)) {
//       errors.usermail = 'Invalid email address';
//     }

//     if (!values.tel) {
//         errors.tel = 'Required';
//       } else if (values.tel.length < 10) {
//         errors.tel = 'Must be 10 characters';
//       }
//        else if (values.tel.length > 10) {
//         errors.tel = 'Must be 10 characters';
//       }
//     if (values.other_tel.length === 10) {
//         errors.other_tel = 'Must be 10 characters';
//       }
//     if (!values.location) {
//         errors.location = 'Required';
//       }
  
//     return errors;
//   };

const CreateArtisanForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [formData, setformData] = useState({
      // userID: Math.random().toString(36).substr(2, 50),
      file: "",
      username: "",
      password: "",
      usermail: "",
      tel: "",
      other_tel: "",
      location: "",
      work_days_from: "",
      work__days_end: "",
    });

    const handleChange = (event) => {
      //check input type
      if (event.target.type === "file") {
        setFile(event.target.files[0]);
      }
  
      setformData({ ...formData, [event.target.name]: event.target.value });
    };

    // const handleDragOver = (e) => {
    //   e.preventDefault();
    //   setDragOver(true);
    // };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      //check for empty input
      if (
        formData.username === "" ||
        formData.password === "" ||
        formData.usermail === "" ||
        formData.tel === "" ||
        formData.other_tel === "" ||
        formData.location === "" ||
        file === ""
      ) {
        alert("all input are required..");
      } else {
        setIsLoading(true);
        //send data to controller when auth..
        //send drag file
  
        UploadNewBuyerController(formData, file);
  
  
        //simulate the loader to hide
        setTimeout(() => {
          setIsLoading(false);
        }, 9000);
      }
  
      //end if
    };


    // const handleImageUpload = (event) => {
    //   const file = event.target.files[0];
    //   const imageURL = URL.createObjectURL(file);
    //   setProfileImage(imageURL);
    // };

  //   const formik = useFormik({
  //       initialValues : {
  //           username: '',
  //           usermail: '',
  //           password: '',
  //           tel: '',
  //           other_tel: '',
  //           location: '',
  //         },
  //         validate,
  //   onSubmit: formData => {
  //     // alert(JSON.stringify(values, null, 2));

  //     try {
  //       api_connect.post("/auth/create-artisan", formData ,{ headers: { 'Content-Type': 'multipart/form-data' }, })
  //       .then((response) => {
  //         if (response.status === 200) {
  //           // Handle successful submission
  //           alert('Form submitted successfully!');
  //         } else {
  //           // Handle error submission
  //           alert('There was an error submitting the form.');
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error.response.data);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
   
  //   },
  // });



  return (
  
            <div className="container">
            <h1>Artisan Registration</h1>

            <form onSubmit={handleSubmit}>
                <div className="form first">
                    <div className='profile-icon'>
                        <div className="profile-icon-upload">
                            {file ? (
                                <img src={file} alt="Profile icon" />
                            ) : (
                                <div className="upload-button">
                                <label htmlFor="profileImageUpload">
                                    <i className="fas fa-upload"></i> Upload Profile Picture
                                </label>
                                <input
                                    type="file"
                                    id="profileImageUpload"
                                    onChange={handleChange}
                                />
                        </div>
                            )}
                    </div>
                </div>
                    <div className="details personal">
                        <span className="title">Personal Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label htmlFor='username'>Username</label>
                                <input type="text" id="username" name="username" onChange={handleChange} value={formData.username} placeholder="Enter username" />
                                {/* <div className='input-field-error'>
                                {errors.username ? <div>{errors.username}</div> : null}
                                </div> */}
                            </div>

                            <div className="input-field">
                                <label htmlFor='password'>Password</label>
                                <input type="text" id="password" name="password" onChange={handleChange} value={formData.password} placeholder="Enter password" />
                                {/* <div className='input-field-error'>
                                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                                </div> */}
                            </div>

                            <div className="input-field">
                                <label htmlFor='usermail'>Email</label>
                                <input type="email" id="usermail" name="usermail" onChange={handleChange} value={formData.usermail} placeholder="Enter password" />
                       
                                {/* <div className='input-field-error'>
                                {errors.usermail ? <div>{errors.usermail}</div> : null}
                                </div> */}
                            </div>

                            <div className="input-field">
                                <label htmlFor='tel'>Mobile Number</label>
                                <input type="text" id="tel" name="tel" onChange={handleChange} value={formData.tel} placeholder="Enter mobile number" />
                                {/* <div className='input-field-error'>
                                {errors.tel ? <div>{errors.tel}</div> : null}
                                </div> */}
                            </div>
                            <div className="input-field">
                                <label htmlFor='other_tel'>Other Mobile Number (Optional)</label>
                                <input type="text" id='other_tel' name='other_tel' onChange={handleChange} value={formData.other_tel} placeholder="Enter other number" />
                                {/* <div className='input-field-error'>
                                {errors.other_tel ? <div>{errors.other_tel}</div> : null}
                                </div> */}
                            </div>

                                <div className="input-field">
                                        <label>Working Days</label>
                                       <div className='input-field-select-container'>
                                            <select name='work_day' required>
                                                <option disabled selected>Start From</option>
                                                <option value="monday">Monday</option>
                                                <option value="tuesday">Tuesday</option>
                                                <option value="wednesday">Wednesday</option>
                                                <option value="thursday">Thursday</option>
                                                <option value="friday">Friday</option>
                                                <option value="saturday">Saturday</option>
                                                <option value="sunday">Sunday</option>
                                            </select>
                                            <select name='work_day' required>
                                                <option disabled selected>To</option>
                                                <option value="monday">Monday</option>
                                                <option value="tuesday">Tuesday</option>
                                                <option value="wednesday">Wednesday</option>
                                                <option value="thursday">Thursday</option>
                                                <option value="friday">Friday</option>
                                                <option value="saturday">Saturday</option>
                                                <option value="sunday">Sunday</option>
                                            </select>
                                       </div>
                                </div>
                            <div className="input-field">
                                    <label htmlFor="location">Location</label>
                                    <input list="locations"  name="location" id="location" onChange={handleChange} value={formData.location}  placeholder='Enter Location'/>

                                    <datalist id="locations">
                                            <option value="Edge"/>
                                            <option value="Firefox"/>
                                            <option value="Chrome"/>
                                            <option value="Opera"/>
                                            <option value="Safari"/>
                                    </datalist>
                                    {/* <div className='input-field-error'>
                                {formik.errors.location ? <div>{formik.errors.location}</div> : null}
                                </div> */}
                            </div>
                            <button type="submit">
                                    <span class="btnText">Register as Artisan</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
  
  )

 }

export default CreateArtisanForm