import React from 'react';
import emailjs from 'emailjs-com'
import { ReactComponent as BugIcon } from '../../images/icons/bug-icon-green.svg';

const Report = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_wGMYOyOHSo1iJPLW7gddv')
      .then((result) => {
        // console.log(result.text);
        document.getElementById('myForm').reset();
        alert('Email sent');
      }, (error) => {
        console.log(error.text);
        alert('error');
      })
    
  } 

  return ( 
    <section id='bug-report' className='main-container no-scroll'>
      <div className='container'>
        <header>
          <h2 className='title'>
            <span className='icon'><BugIcon /></span>
            Report a bug
          </h2>
          <p className='sub-text'>Thank you in advance for your efforts in describing the issue.</p>
        </header>
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
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </section>
   );
}
 
export default Report;
