import React, { useState, createRef } from 'react';
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import styleVar from '../../styling/variables.scss'

const recaptchaRef = createRef(); // ref to use captcha functions
const sendEmail = (e) => {
  emailjs.sendForm('report_service', 'report_form', e.target, 'user_4OG68qZLl4ZXKBq8cUxDT')
    .then((result) => {
      document.getElementById('myForm').reset();
      alert('Thank you! Your report has been sent.\n\nFeel free to check our FAQs page for updates on bug fixes and a description of how the features can be best utilized.');
    }, (error) => {
      console.log(error.text);
      alert('error');
    })
} 

const activeButton = {
  background: styleVar.fontColorAccent,
  color: 'white',
  cursor: 'pointer'
}

const inActiveButton = {
  color: styleVar.fontColorAccent,
  background: '#eff3ef'
}

const Form = () => {
  const [isHuman, setIsHuman] = useState(false);
  const onChange = () => {setIsHuman(true)} // when box clicked
  const onExpired = () => {setIsHuman(false)} // when captcha expires

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isHuman === true) {
      sendEmail(e);
      recaptchaRef.current.reset(); // reset captcha after submit
    }
    else alert('Verify Captcha')
  }
   
  return ( 
    <form id='myForm' onSubmit={handleSubmit}>
      <div className='email-container col'>
        <label className='label'>Your email</label>
        <input className='email' type='email' name='email' placeholder='eg. username@emailprovider.com' required/>
      </div>
      <div className='description-container col'>
        <label className='label'>Describe the bug. Talk us through how you found it.</label>
        <textarea className='description' name='description' rows='4' placeholder='eg. I went to the advance search, and the box I was typing in disappeared.' required/>
      </div>
      <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} onChange={onChange} onExpired={onExpired} ref={recaptchaRef}/>
      <div className='btn-container'>
        <button className='btn' type='submit' style={isHuman ? activeButton:inActiveButton}>Submit</button>
      </div>
    </form>
   );
}
 
export default Form;