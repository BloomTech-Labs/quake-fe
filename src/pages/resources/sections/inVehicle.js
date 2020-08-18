import React from 'react';
import TitleContainer from "../titleContainer";
import {Vehicle} from "../imageImports";

const toggleClass = () => {
  document.querySelector("#in-vehicle .content-container").classList.toggle("closed");
  document.querySelector("#in-vehicle .triangle-up").classList.toggle("closed");
}

const InVehicle = () => {
  return ( 
    <section id="in-vehicle">
      <TitleContainer title="In your vehicle:" customClickEvent={toggleClass}/>
      <div className="content-container closed">
        <div className="section-text-container">
          <p className="section-text">
            Drive to an <strong className='bold'>open area</strong> free of powerlines,
            overpasses, or anything that could fall or collapse.
          </p>
          <Vehicle className="invehicle-img" alt="slow down, pull over, stay inside image representation" />
          <p className="section-text bigger">
            <strong className='bold'>
              Stay buckled and remain in the car until the quake has ended.
            </strong>
          </p>
          <p className="section-text">
            Check the vehicle for damage as well as the roadway for cracks or
            tall debris.
          </p>
        </div>
      </div>
    </section>
   );
}
 
export default InVehicle;