import React from 'react';
import TitleContainer from "../titleContainer";
import {Outdoor} from "../imageImports";

const toggleClass = () => {
  document.querySelector("#outdoors .content-container").classList.toggle("closed");
  document.querySelector("#outdoors .triangle-up").classList.toggle("closed");
}

const Outdoors = () => {
  return ( 
    <section id="outdoors">
      <TitleContainer title="Outdoors:" customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="section-text-container">
          <p className="section-text">While outdoors during an earthquake</p>
        </div>
      <h3 className="sub-head-text">Do not try to run inside!</h3>
      <div className="section-text-container">
        <p className="section-text">
          <strong>Injury can occur from broken doorways or glass.</strong>
        </p>
        <p className="section-text">
          Instead <strong>look for an open area</strong> away from
          powerlines, buildings, tall structures, and anything else that
          could be flung around during an earthquake.
        </p>
        <Outdoor className="outdoor-img" alt="people standing in an open area during an earthquake"/>
        <p className="section-text">
          <strong>Get into the drop and cover position and wait out the shaking.</strong>
        </p>
        </div>
      </div>
    </section>
   );
}
 
export default Outdoors;