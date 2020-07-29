import React from 'react';
import TitleContainer from "../titleContainer";

const toggleClass = () => {
  document.querySelector("#medical-aid .content-container").classList.toggle("closed");
  document.querySelector("#medical-aid .triangle-up").classList.toggle("closed");
}

const MedicalAid = () => {
  return ( 
    <section id="medical-aid">
      <TitleContainer title="Medical aid:" customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="section-text-container">
          <p className="section-text">If you find yourself or anyone injured during an event, refer to these links for medical care.</p>
        </div>
        <div className="resource-link-container">
          <a href="https://www.osha.gov/" target="_blank" rel="noopener noreferrer" className="resource-link">
            OSHA - Occupational Safety and Health Administration
          </a>
          <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className="resource-link">
            CDC - Center for Disease Control
          </a>
          <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencie types-of-emergencies/earthquake.html" target="_blank" rel="noopener noreferrer" className="resource-link">
            Red Cross.org Earthquake Safety
          </a>
          <a href="https://www.fema.gov/media-library-data/1510153676317-82124ab3b0a31ea239f60acc8d46c2ba/FEMA_B-526_Earthquake_Safety_Checklist_110217_508.pdf" target="_blank" rel="noopener noreferrer" className="resource-link">
            FEMA - Earthquake Preparedness Form
          </a>
          <a href="https://www.aarp.org/health/healthy-living/info-10-2012/medical-emergency-preparation.html" target="_blank" rel="noopener noreferrer" className="resource-link">
            AARP - Tips to Prepare for Medical Response
          </a>
        </div>
      </div>
    </section>
   );
}
 
export default MedicalAid;