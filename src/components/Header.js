import React from "react";
import { ReactComponent as FaultlineLogo } from "../images/graphics/Faultline_Logo.svg";

const Header = () => {
  return (
    <header role="banner" className="header">
      <div className="logo-container" aria-label="faultline logo">
        <FaultlineLogo className="header-logo" alt="faultline logo" />
        <p>FAULTLINE</p>
      </div>
    </header>
  );
};

export default Header;
