import React from "react";
import Filters from "./Filters";
import List from "./List";
import Sort from './Sort';

const Activity = () => {
  return (
    <div>
      <Filters />
      <Sort />
      <div className="filter-bar">
        <div className="filter-icon"></div>
      </div>
      <List />
    </div>
  );
};

export default Activity;
