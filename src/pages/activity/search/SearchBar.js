import React from "react";
import Geocoder from "./Geocoder";
import { ReactComponent as FilterIcon } from "../../../images/icons/filter.svg";

const SearchBar = () => {
  const toggleFilters = (e) => {
    // Toggles visibility of search menu
    e.preventDefault();

    const filterMenu = document.getElementById("search-menu");

    filterMenu.style.display === "flex"
      ? (filterMenu.style.display = "none")
      : (filterMenu.style.display = "flex");

    console.log("toggled display");
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <Geocoder />
        {/* Current Location Button */}
      </div>
      <div
        aria-label="filters toggle"
        className="filters-toggle"
        onClick={toggleFilters}
      >
        <FilterIcon className="filter-icon" />
        <p>Filter</p>
      </div>
    </div>
  );
};

export default SearchBar;
