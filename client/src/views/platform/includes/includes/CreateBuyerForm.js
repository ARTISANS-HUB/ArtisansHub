import React,{useState} from 'react'
import "../../../css/createArtisans.css";
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <= 8) {
      errors.password = 'Must be 8 characters or more';
    }
  
    if (!values.usermail) {
      errors.usermail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usermail)) {
      errors.usermail = 'Invalid email address';
    }

    if (!values.tel) {
        errors.tel = 'Required';
      } else if (values.tel.length = 10) {
        errors.tel = 'Must be 10 characters';
      }
    if (!values.other_tel) {
        errors.other_tel = 'Required';
      } else if (values.other_tel.length = 10) {
        errors.other_tel = 'Must be 10 characters';
      }
    if (!values.location) {
        errors.location = 'Required';
      } else if (values.location.length = 0) {
        errors.location = 'Must not be empty';
      }
  
    return errors;
  };

const CreateBuyerFor = () => {
    const [profileImage, setProfileImage] = useState(null);


    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    };

    const formik = useFormik({
        initialValues : {
            username: '',
            usermail: '',
            password: '',
            tel: '',
            other_tel: '',
            location: '',
          },
          validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
  
    <div className="container">
    <h1>Buyer Registration</h1>

    <form onSubmit={formik.handleSubmit}>
        <div className="form first">
            <div className='profile-icon'>
                <div className="profile-icon-upload">
                    {profileImage ? (
                        <img src={profileImage} alt="Profile icon" />
                    ) : (
                        <div className="upload-button">
                        <label htmlFor="profileImageUpload">
                            <i className="fas fa-upload"></i> Upload Profile Picture
                        </label>
                        <input
                            type="file"
                            id="profileImageUpload"
                            onChange={handleImageUpload}
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
                        <input type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} placeholder="Enter username" />
                        <div className='input-field-error'>
                        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor='password'>Password</label>
                        <input type="text" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Enter password" />
                        <div className='input-field-error'>
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor='usermail'>Email</label>
                        <div className='input-field-error'>
                        {formik.errors.usermail ? <div>{formik.errors.usermail}</div> : null}
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor='tel'>Mobile Number</label>
                        <input type="text" id="tel" name="tel" onChange={formik.handleChange} value={formik.values.tel} placeholder="Enter mobile number" />
                        <div className='input-field-error'>
                        {formik.errors.tel ? <div>{formik.errors.tel}</div> : null}
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor='other_tel'>Other Mobile Number (Optional)</label>
                        <input type="text" id='other_tel' name='other_tel' onChange={formik.handleChange} value={formik.values.other_tel} placeholder="Enter other number" />
                        <div className='input-field-error'>
                        {formik.errors.other_tel ? <div>{formik.errors.other_tel}</div> : null}
                        </div>
                    </div>

                    <div className="input-field">
                            <label htmlFor="location">Location</label>
                            <input list="locations"  name="location" id="location" onChange={formik.handleChange} value={formik.values.location}  placeholder='Enter Location'/>

                            <datalist id="locations">
                                    <option value="Edge"/>
                                    <option value="Firefox"/>
                                    <option value="Chrome"/>
                                    <option value="Opera"/>
                                    <option value="Safari"/>
                            </datalist>
                            <div className='input-field-error'>
                        {formik.errors.location ? <div>{formik.errors.location}</div> : null}
                        </div>
                    </div>
                    <button type="submit">
                            <span class="btnText">Register as Buyer</span>
                    </button>
                </div>
            </div>
        </div>
    </form>
    </div>

)
}

export default CreateBuyerFor