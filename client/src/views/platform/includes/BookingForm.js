import React from 'react'
import "../../../css/booking.css";
import {useFormik} from 'formik';


const validate = values => {
    const errors = {};
    if (!values.date) {
      errors.date = 'Required';
    }
    if (!values.time) {
      errors.time = 'Required';
    } 
    if (!values.charge) {
      errors.charge = 'Required';
    } 
  
    return errors;
  };


const BookingForm = () => {

    const formik = useFormik({
        initialValues : {
            date: '',
            time: '',
            charge: '',
          },
          validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='booking-form-container'>
        <h2 className='booking-form-heading'>Booking Form</h2>

        <form className='booking-form' onSubmit={formik.handleSubmit}>
           
           <div className='booking-form-fields'>
                <div class="input-field">
                        <label>Date</label>
                        <input type="date" id="date" name="date" placeholder="Select Date" onChange={formik.handleChange}/>
                        <div className='input-field-error'>
                        {formik.errors.date ? <div>{formik.errors.date}</div> : null}
                        </div>
                </div>
                <div class="input-field">
                        <label>Time</label>
                        <input type="time" id="time" name="time" placeholder="Select time" onChange={formik.handleChange} />
                        <div className='input-field-error'>
                        {formik.errors.time ? <div>{formik.errors.time}</div> : null}
                        </div>
                </div>
                <div class="input-field">
                        <label>Service Charge</label>
                        <input type="text" placeholder="Service Charge" name="charge" id="charge" onChange={formik.handleChange}/>
                        <div className='input-field-error'>
                        {formik.errors.charge ? <div>{formik.errors.charge}</div> : null}
                        </div>
                </div>

                <button type="submit">
                            <span class="btnText">Book</span>
                </button>
           </div>
        
        </form>
    </div>
  )
}

export default BookingForm