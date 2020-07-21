import React from "react";
import Geocoder from "./Geocoder";

const SearchBar = () => {
  const toggleFilters = (e) => {
    // Toggles visibility of search menu
    e.preventDefault();

    const filterMenu = document.getElementById("search-menu");

    filterMenu.style.display === "block"
      ? (filterMenu.style.display = "none")
      : (filterMenu.style.display = "block");

    console.log("toggled display");
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <Geocoder />
        {/* Current Location Button */}
      </div>
      <button aria-label="filters toggle" className="filters-toggle" onClick={toggleFilters}></button>
    </div>
  );
};

export default SearchBar;
