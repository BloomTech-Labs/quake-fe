import React from "react";
import FaultlineLogo from "../images/Logo_wtext_lightschm.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  const toggleSearch = () => {
    // Toggles visibility of search menu
    const searchMenu = document.getElementById("search-menu");
    searchMenu.style.display === "block"
      ? (searchMenu.style.display = "none")
      : (searchMenu.style.display = "block");
    console.log("toggled display");
  };

  return (
    <header role="banner" className="header">
      <img
        src={FaultlineLogo}
        className="header-logo"
        aria-label="faultline logo"
        alt="faultline logo"
      />
      {location.pathname === "/resources" ? (
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <aside className="search-header">
          <button
            onClick={toggleSearch}
            type="button"
            role="switch"
            aria-checked="false"
            aria-label="search button"
            className="search-icon"
            tabIndex="0"
          />
        </aside>
      )}
    </header>
  );
};

export default Header;
