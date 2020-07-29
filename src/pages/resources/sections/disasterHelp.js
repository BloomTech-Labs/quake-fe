import React from 'react';
import TitleContainer from "../titleContainer";
import ResourceCard from "../resourceCard";

const toggleClass = () => {
  document.querySelector("#disaster-help .content-container").classList.toggle("closed");
  document.querySelector("#disaster-help .triangle-up").classList.toggle("closed");
}

const DisasterHelp = () => {
  return ( 
    <section id="disaster-help">
      <TitleContainer title="Disaster Links:"
        customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="resources-container">
          <ResourceCard />
        </div>
      </div>
    </section>
   );
}
 
export default DisasterHelp;