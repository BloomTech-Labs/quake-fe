import React from 'react';
import TitleContainer from "../titleContainer";

const toggleClass = () => {
  document.querySelector("#travel-tips .content-container").classList.toggle("closed");
  document.querySelector("#travel-tips .triangle-up").classList.toggle("closed");
}

const TravelTips = () => {
  return ( 
    <section id="travel-tips">
      <TitleContainer title="Other travel tips:" customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="section-text-container">
          <p className="section-text">
            Consider travel insurance to cover possible expenses abroad. Bring
            cash and copies of important travel documents in case you are
            forced to evacuate the country.
          </p>
        </div>
      </div>
    </section>
   );
}
 
export default TravelTips;