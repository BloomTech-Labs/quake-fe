import React from "react";
import { ReactComponent as FaultlineLogo } from "../images/Faultline_Logo.svg";
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
      <FaultlineLogo
        className="header-logo"
        tabIndex="0"
        aria-label="faultline logo"
      />
      <h1 className="site-title" tabIndex="0" aria-label="faultline">
        FaultLine
      </h1>
      {location.pathname === "/resources" ? (
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <aside className="search-header">
          <div
            onClick={toggleSearch}
            tabIndex="0"
            type="button"
            role="switch"
            aria-label="search button"
            className="search-icon"
          />
        </aside>
      )}
    </header>
  );
};

export default Header;
