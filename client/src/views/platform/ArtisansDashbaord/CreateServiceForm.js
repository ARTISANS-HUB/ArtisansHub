import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import  '../../../css/serviceForm.css';

const handleSubmit = (values) => {
    return values; 
}

const CreateServiceForm = () => {
    


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
          <Field as="textarea" id="description" name="description" placeholder ="Description" />
          <ErrorMessage name="description" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Price Amount:</label>
          <Field type="text" id="name" name="name" placeholder = "Price Amount" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Phone:</label>
          <Field type="phone" id="name" name="name" placeholder="Phone" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Location:</label>
          <Field type="text" id="name" name="name" placeholder="Location" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Profile:</label>
          <Field type="text" id="name" name="name" placeholder="Profile" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Username:</label>
          <Field type="text" id="name" name="name"placeholder="Username" />
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