import React from 'react';
import { ReactComponent as BugIcon } from '../../images/icons/bug-icon-green.svg';
import Form from './form'

const Report = () => {
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
        <Form />
      </div>
    </section>
   );
}
 
export default Report;
