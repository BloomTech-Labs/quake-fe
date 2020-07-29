import React from 'react';
import TitleContainer from "../titleContainer";
import {STEPLogo} from "../imageImports";

const toggleClass = () => {
  document.querySelector("#step .content-container").classList.toggle("closed");
  document.querySelector("#step .triangle-up").classList.toggle("closed");
}

const STEP = () => {
  return ( 
    <section id="step">
      <TitleContainer title="Sign up for S.T.E.P." customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="step-logo-container">
          <STEPLogo className="step-logo" alt="Smart Traveler Enrollment Program compony logo"/>
          <a href="https://step.state.gov/" target="_blank" rel="noopener noreferrer"
            className="resource-link">Connect to step.state.gov</a>
        </div>
        <div className="section-text-container">
          <p className="section-text">
            Sign up for Smart Traveler Enrollment Program, or STEP, through
            the Bureau of Consular Affairs. They will send you important
            emergency information during a disaster.
          </p>
        </div>
      </div>
    </section>
   );
}
 
export default STEP;