import React from 'react';
import emailjs from 'emailjs-com'

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('report_service', 'report_form', e.target, 'user_4OG68qZLl4ZXKBq8cUxDT')
    .then((result) => {
      // console.log(result.text);
      document.getElementById('myForm').reset();
      alert('Email sent');
    }, (error) => {
      console.log(error.text);
      alert('error');
    })
} 

const Form = () => {
  return ( 
    <form id='myForm' onSubmit={sendEmail}>
      <div className='email-container col'>
        <label className='label'>Your email</label>
        <input className='email' type='email' name='email' placeholder='eg. username@emailprovider.com' required/>
      </div>
      <div className='description-container col'>
        <label className='label'>Describe the bug. Talk us through how you found it.</label>
        <textarea className='description' name='description' rows='4' placeholder='eg. I went to the advance search, and the box I was typing in disappeared.' required/>
      </div>
      <div className='btn-container'>
        <button className='btn' type='submit'>Send Verification to my Phone</button>
      </div>
    </form>
   );
}
 
export default Form;