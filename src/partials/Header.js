import React from "react";
import { ReactComponent as FaultlineLogo } from "../images/Faultline_Logo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  return (
    <header role="banner" className="header">
      <div className="logo-container" aria-label="faultline logo">
        <FaultlineLogo className="header-logo" alt="faultline logo" />
        <p>FAULTLINE</p>
      </div>
      {location.pathname === "/resources" ? (
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
