import React from "react";
import "../../../css/serviceForm.css";
import { UploadNewServiceArtisan } from "../../../controllers/ArtisanPlatformServiceController";
import { useState } from "react";

const CreateServiceForm = () => {

  const [file, setFile] = useState(null);
  const [formData, setformData] = useState({
    userID: Math.random().toString(36).substr(2, 50),
    description: "",
    phone: "",
    type: "",
    location: "",
    updated_by: "",
    charge:0,
  });

  const handleSubmit = (event) => {
  event.preventDefault()
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
      UploadNewServiceArtisan(formData , file );
    }

   
  };

  const handleChange = (event) => {
       //check input type
       if (event.target.type === "file") {
        setFile(event.target.files[0]);
      }
    setformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="formContainer">
   
        <form  onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required name= "name" value={formData.description} placeholder="Name" onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              as="textarea"
              id="description"
              value={formData.description}
              required name= "description"
              onChange={handleChange}
              placeholder="Description"
            />
           
          </div>
          <div>
            <label htmlFor="name">Price Amount:</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              id="charge"
              required name= "charge"
              value={formData.charge}
              onChange={handleChange}
              placeholder="Price Amount"
            />
          </div>
          <div>
            <label htmlFor="name">Phone:</label>
            <input
              type="type"
              id="phone"
              required name= "phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>
          <div>
            <label htmlFor="name">Location:</label>
            <input
              type="text"
              id="location"
              required name= "location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <div>
            <label htmlFor="name">Profile:</label>
            <input
              type="file"
              id="file"
              required 
              name= "file"
              value={formData.file}
              onChange={handleChange}
              placeholder="Profile"
            />
          </div>
          <div>
  <label htmlFor="name">Type:</label>
<input list="activities" required name= "type" id="type" onChange={handleChange} value={formData.type} placeholder="Choose service type" />
<datalist id="activities">
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
  <option value="electrician services">Electrician Services</option>
  <option value="gardening services">Gardening Services</option>
  <option value="pest control">Pest Control</option>
  <option value="home renovation">Home Renovation</option>
  <option value="appliance repair">Appliance Repair</option>
  <option value="interior design">Interior Design</option>
  <option value="furniture assembly">Furniture Assembly</option>
  <option value="carpentry">Carpentry</option>
  <option value="roofing services">Roofing Services</option>
  <option value="building construction">Building Construction</option>
  <option value="concrete work">Concrete Work</option>
  <option value="bricklaying">Bricklaying</option>
  <option value="plastering">Plastering</option>
  <option value="flooring installation">Flooring Installation</option>
  <option value="structural engineering">Structural Engineering</option>
  <option value="landscaping">Landscaping</option>
  <option value="window installation">Window Installation</option>
  <option value="siding installation">Siding Installation</option>
  <option value="insulation services">Insulation Services</option>
  <option value="yoga at home">Yoga at Home</option>
  <option value="bodyweight exercises">Bodyweight Exercises</option>
  <option value="home spa day">Home Spa Day</option>
  <option value="pilates">Pilates</option>
  <option value="indoor cycling">Indoor Cycling</option>
  <option value="stretching">Stretching</option>
  <option value="meditation">Meditation</option>
  <option value="dance workout">Dance Workout</option>
  <option value="home gym workout">Home Gym Workout</option>
</datalist>

           
          </div>

          <div>
          <button type="submit"  onClick={handleSubmit}>Submit</button>
          </div>
        </form>
    </div>
  );
};

export default CreateServiceForm;
