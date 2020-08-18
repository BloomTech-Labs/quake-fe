import React from 'react';
import TitleContainer from "../titleContainer";
import ListTypePlus from "../listTypePlus";
import {EKit} from "../imageImports";

const toggleClass = () => {
  document.querySelector("#e-kits .content-container").classList.toggle("closed");
  document.querySelector("#e-kits .triangle-up").classList.toggle("closed");
}

const EKits = () => {
  return ( 
    <section id="e-kits">
      <TitleContainer title="Keep an emergency kit:" customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="section-text-container">
          <EKit className="ekit-img" alt="emergency kit containing the following items: waterproof bags, non-perishable food, batteries, first aid kit, important documents in sealed bags, flashlight, baby formula, sturdy gloves, portable radio"/>
          <p className="section-text bigger">
            <strong className='bold'>An emergency kit can save the day should the worst occur.</strong>
          </p>
          <p className="section-text">
            Consider leaving a kit in your house, vehicle, or luggage in an
            earthquake prone area.
          </p>
        </div>
        <ListTypePlus />
        <div className="section-text-container">
          <p className="section-text">
            Have <strong className='bold'>three days</strong> of non-perishable food and water.
            If traveling try to bring as much as you can fit in a carry-on.
          </p>
        </div>
      </div>
    </section>
   );
}
 
export default EKits;