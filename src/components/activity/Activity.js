import React from "react";
import Filters from "./Filters";
import List from "./results/List";
import Sort from "./results/Sort";
// import Map from "./map/Map";

const Activity = () => {
  return (
    <>
      {/* Search Bar */}
      <Filters /> {/* As a popup menu that overlays the list when open but not the search bar */}
      <Sort />{/* Place this inside of the list at the very top */}
      <List />
      {/* Map */}
    </>
  );
};

export default Activity;
