import React from "react";
import MediaQuery from "react-responsive";

// sections
import Intro from "./sections/intro";
import SectionLinks from "./sections/sectionLinks";
import Indoors from "./sections/indoors";
import Outdoors from "./sections/outdoors";
import InVehicle from "./sections/inVehicle";
import EKits from "./sections/eKits";
import STEP from "./sections/STEP";
import HelpSignals from "./sections/helpSignals";
import TravelTips from "./sections/travelTips";
import MedicalAid from "./sections/medicalAid";
import DisasterHelp from "./sections/disasterHelp";

const Resources = () => {
  return (
    <div className="main-container resource-page scroll">
      <MediaQuery minWidth={800}>
        <SectionLinks />
        <Intro />
      </MediaQuery>

      <MediaQuery maxWidth={800}>
        <Intro />
        <SectionLinks />
      </MediaQuery>
      
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
