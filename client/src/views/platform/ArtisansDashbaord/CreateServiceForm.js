import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import  '../../../css/serviceForm.css';
import {UploadNewServiceArtisan} from "../../../controllers/ArtisanPlatformServiceController";
import { useState } from "react";

const CreateServiceForm = () => {
    

  const [formData, setformData] = useState({
    userID: Math.random().toString(36).substr(2, 50),
    file: "",
    description: "",
    phone: "",
    type: "",
    location: "",
    updated_by: "",
  });

const handleSubmit = (values) => {
//check for empty input
if (
  formData.description === "" ||
  formData.charge === "" ||
  formData.phone === "" ||
  formData.type === "" ||
  formData.file === "" ||
  formData.location === "" 
 
) {
  alert("all input are required..");
} else {

  UploadNewServiceArtisan(formData);

}

    return; 
}




const handleChange = (event) => {
  setformData({ ...formData, [event.target.name]: event.target.value });

  console.log(formData.description)
};
  return (
    <div className='formContainer'>
         <Formik
      initialValues={{ name: '', description: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" placeholder= "Name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description"  value={formData.description} name="description" onChange={handleChange} placeholder ="Description" />
          <ErrorMessage name="description" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Price Amount:</label>
          <Field type="number" min="0.1" step="0.1" id="charge" name="charge" value={formData.charge} onChange={handleChange} placeholder = "Price Amount" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Phone:</label>
          <Field type="type" id="phone" name="phone" value={formData.phone} placeholder="Phone" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Location:</label>
          <Field type="text" id="location" name="location" value={formData.charge} placeholder="Location" />
          <ErrorMessage name="location" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Profile:</label>
          <Field type="text" id="file" name="file" value={formData.charge} placeholder="Profile" />
          <ErrorMessage name="file" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Type:</label>
          <Field type="phone" id="type" name="type" value={formData.charge} placeholder="Phone" />
          <ErrorMessage name="type" component="div" className="error" />
        </div>


        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
    </div>
  )
}

export default CreateServiceForm;