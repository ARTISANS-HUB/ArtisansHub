import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import  '../../../css/serviceForm.css';
import UploadNewUserController from "../../../controllers/UploadNewUserController";
import { useState } from "react";

const CreateServiceForm = () => {
    

  const [formData, setformData] = useState({
    userID: Math.random().toString(36).substr(2, 50),
    profile: "",
    username: "",
    password: "",
    usermail: "",
    tel: "",
    role: "",
    created_at: "",
    updated_at: "",
  });

const handleSubmit = (values) => {
//check for empty input
if (
  formData.username === "" ||
  formData.password === "" ||
  formData.usermail === "" ||
  formData.tel === "" ||
  formData.role === "" ||
  formData.created_at === "" 
 
) {
  alert("all input are required..");
} else {

  UploadNewUserController(formData);

}

    return; 
}




const handleChange = (event) => {
  setformData({ ...formData, [event.target.name]: event.target.value });
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
          <Field as="textarea" id="description" name="description" onChange={handleChange} placeholder ="Description" />
          <ErrorMessage name="description" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Price Amount:</label>
          <Field type="number" min="0.1" step="0.1" id="charge" name="charge" value={formData.charge} onChange={handleChange} placeholder = "Price Amount" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Phone:</label>
          <Field type="phone" id="name" name="name" value={formData.charge} placeholder="Phone" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Location:</label>
          <Field type="text" id="name" name="name" value={formData.charge} placeholder="Location" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Profile:</label>
          <Field type="text" id="file" name="file" value={formData.charge} placeholder="Profile" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Type:</label>
          <Field type="phone" id="name" name="name" value={formData.charge} placeholder="Phone" />
          <ErrorMessage name="name" component="div" className="error" />
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