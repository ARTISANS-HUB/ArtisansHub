import React from 'react'
import myImage from "../../../uploads/bg.jpeg"
import "../../../css/contactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
        <div className='contact-form-left'>
      
            <img src={myImage}/>
            <div className='contact-form-social-icons'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
        </div>
        <div className='contact-form-right'>
            <h2 className='contact-form-title'>
                Get in touch
            </h2>

            <form className='contact-form'>
                <div className='contact-form-double-field'>
                    <input type='text' placeholder='First Name' className='contact-form-input'/>
                    <input type='text' placeholder='Last Name' className='contact-form-input'/>
                </div>
                <div className='contact-form-single-field'>
                    <input type='text' placeholder='Email' className='contact-form-input'/>
                </div>
                <div className='contact-form-single-field'>
                    <input type='text' placeholder='Phone' className='contact-form-input'/>
                </div>
                <div className='contact-form-single-field-full'>
                    <textarea placeholder='Message' className='contact-form-input contact-form-textarea'></textarea>
                </div>
                <div className='contact-form-single-field-button'>
                    <button className='contact-form-button'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm