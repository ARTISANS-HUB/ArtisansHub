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
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" placeholder= "Name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Price Amount:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Phone:</label>
          <Field type="phone" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Location:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Profile:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="name">Username:</label>
          <Field type="text" id="name" name="name" />
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