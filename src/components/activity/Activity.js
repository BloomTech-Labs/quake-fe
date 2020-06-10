import React from "react";
import Filters from "./Filters";
import List from "./List";

const Activity = () => {
  return (
    <div>
      <Filters />

      <div className="filter-bar">
        <div className="filter-icon"></div>
      </div>

      <List />
    </div>
  );
};

export default Activity;
