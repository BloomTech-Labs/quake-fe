import React from "react";

// sections
import Intro from './sections/intro'
import SectionLinks from './sections/sectionLinks'
import Indoors from './sections/indoors'
import Outdoors from './sections/outdoors'
import InVehicle from './sections/inVehicle'
import EKits from './sections/eKits'
import STEP from './sections/STEP'
import HelpSignals from './sections/helpSignals'
import TravelTips from './sections/travelTips'
import MedicalAid from './sections/medicalAid'
import DisasterHelp from './sections/disasterHelp'

const Resources = () => {
  return (
    <div className="main-container resource-page scroll">
      <Intro />
      <SectionLinks />
      <Indoors />
      <Outdoors />
      <InVehicle />
      <EKits />
      <STEP />
      <HelpSignals />
      <TravelTips />
      <MedicalAid />
      <DisasterHelp />
    </div>
  );
};

export default Resources;
