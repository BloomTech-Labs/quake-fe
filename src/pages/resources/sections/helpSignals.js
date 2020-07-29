import React from 'react';
import TitleContainer from "../titleContainer";
import ListTypeSolid from "../listTypeSolid";

const toggleClass = () => {
  document.querySelector("#help-signals .content-container").classList.toggle("closed");
  document.querySelector("#help-signals .triangle-up").classList.toggle("closed");
}

const HelpSignals = () => {
  return ( 
    <section id="help-signals">
      <TitleContainer title="Signaling for help:" customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="section-text-container">
          <p className="section-text">During an earthquake, becoming buried under debris is possible.</p>
          <div className="green-message">
            <p className="green-message-text">
              It’s important to learn how to signal for help so rescuers can
              find you.
            </p>
          </div>
          <p className="section-text">Possible signaling techniques:</p>
        </div>
        <ListTypeSolid />
      </div>
    </section>
   );
}
 
export default HelpSignals;