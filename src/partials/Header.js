import React, { useEffect } from "react";
import { ReactComponent as FaultlineLogo } from "../images/Faultline_Logo.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  const toggleSearch = () => { // Toggles visibility of search menu
    const searchMenu = document.getElementById("search-menu");
    searchMenu.style.display === "block" ? (
        searchMenu.style.display = "none"
    ) : (
        searchMenu.style.display = "block"
    );
    console.log("toggled display");
  };

  const checkLocation = () => {
    console.log(location)
  };
  
  useEffect(() => {
    checkLocation();
  });

  return (
    <header role="banner" className="header" aria-label="Faultline">
      <FaultlineLogo className="header-logo" />
      <h1 className="site-title">FaultLine</h1>
      {(location.pathname === '/resources') ? 
      <div className='hamburger-menu'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div> : 
      <div className="search-header" onClick={toggleSearch}>
        <div className="search-icon" />
      </div>}
    </header>
  );
};

export default Header;
