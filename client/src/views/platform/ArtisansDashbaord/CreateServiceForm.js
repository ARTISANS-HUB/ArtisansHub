import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../../css/serviceForm.css";
import UploadNewUserController from "../../../controllers/UploadNewUserController";
import { useState } from "react";
import swal from 'sweetalert';

const CreateServiceForm = () => {
  const [file, setFile] = useState(null);

  
  const [formData, setformData] = useState({
    serviceId: Math.random().toString(36).substr(2, 50),
    description:'',
    charge:'',
    phone:'',
    type:'',
    location:'',
    created_by:'',
    tel:'',
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
      swal({
        title: "Form Data",
        text: "All input are required",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        });
    } else {
      UploadNewUserController(formData , file);
    }

    return;
  };

  const handleChange = (event) => {
    //check input type
    if (event.target.type === "file") {
      setFile(event.target.files[0]);
    }
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="serviceFormContainer">
      <div className="formwrapper">
        <Formik
          initialValues={{ name: "", description: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" value={formData.name} name="name" handleChange={handleChange}    placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Charge:</label>
              <Field
                type="text"
                id="Charge"
                name="charge"
                handleChange={handleChange}  value={formData.charge}  placeholder="Charge"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Description:</label>
              <Field
                type="text"
                as="textarea"
                id="Description"
                name="description"
                handleChange={handleChange}  value={formData.description}  placeholder="Description"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone:</label>
              <Field type="text" id="tel" name="tel" handleChange={handleChange}  value={formData.tel}  placeholder="Phone" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Location:</label>
              <Field
                type="text"
                id="Location"
                name="location"
                handleChange={handleChange}  value={formData.location}  placeholder="Location"
              />
              <ErrorMessage name="location" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Profile:</label>
              <Field
                type="text"
                id="Profile"
                name="file"
                handleChange={handleChange}  value={formData.name}  placeholder="Profile"
              />
              <ErrorMessage name="file" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <Field type="email" id="email" name="usermal" handleChange={handleChange}  value={formData.usermail}  placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* ... other fields */}

            <div className="form-group">
              <label htmlFor="name">Type:</label>
              <Field
                as="select"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="cleaning">Cleaning</option>
                <option value="washing">Washing</option>
                <option value="singing">Singing</option>
                <option value="cooking">Cooking</option>
                <option value="reading">Reading</option>
                <option value="gardening">Gardening</option>
                <option value="coding">Coding</option>
                <option value="exercising">Exercising</option>
                <option value="painting">Painting</option>
                <option value="photography">Photography</option>
                <option value="meditating">Meditating</option>
                <option value="writing">Writing</option>
                <option value="home cleaning">Home Cleaning</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrician services">
                  Electrician Services
                </option>
                <option value="gardening services">Gardening Services</option>
                <option value="pest control">Pest Control</option>
                <option value="home renovation">Home Renovation</option>
                <option value="appliance repair">Appliance Repair</option>
                <option value="interior design">Interior Design</option>
                <option value="furniture assembly">Furniture Assembly</option>
                <option value="carpentry">Carpentry</option>
                <option value="roofing services">Roofing Services</option>
                <option value="building construction">
                  Building Construction
                </option>
                <option value="concrete work">Concrete Work</option>
                <option value="bricklaying">Bricklaying</option>
                <option value="plastering">Plastering</option>
                <option value="flooring installation">
                  Flooring Installation
                </option>
                <option value="structural engineering">
                  Structural Engineering
                </option>
                <option value="landscaping">Landscaping</option>
                <option value="window installation">Window Installation</option>
                <option value="siding installation">Siding Installation</option>
                <option value="insulation services">Insulation Services</option>
                <option value="yoga at home">Yoga at Home</option>
                <option value="bodyweight exercises">
                  Bodyweight Exercises
                </option>
                <option value="home spa day">Home Spa Day</option>
                <option value="pilates">Pilates</option>
                <option value="indoor cycling">Indoor Cycling</option>
                <option value="stretching">Stretching</option>
                <option value="meditation">Meditation</option>
                <option value="dance workout">Dance Workout</option>
                <option value="home gym workout">Home Gym Workout</option>
              </Field>
              <ErrorMessage name="type" component="div" className="error" />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateServiceForm;
