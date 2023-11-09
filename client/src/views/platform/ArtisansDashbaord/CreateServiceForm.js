import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../../css/serviceForm.css";
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
  };

  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="formContainer">
      <div className="formwrapper">
        <Formik
          initialValues={{ name: "", description: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Charge:</label>
              <Field
                type="text"
                id="Charge"
                name="Charge"
                placeholder="Charge"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Description:</label>
              <Field
                type="text"
                as="textarea"
                id="Description"
                name="Description"
                placeholder="Description"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone:</label>
              <Field type="text" id="Phone" name="Phone" placeholder="Phone" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Location:</label>
              <Field
                type="text"
                id="Location"
                name="Location"
                placeholder="Location"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Profile:</label>
              <Field
                type="text"
                id="Profile"
                name="Profile"
                placeholder="Profile"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <Field type="text" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="name" component="div" className="error" />
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
