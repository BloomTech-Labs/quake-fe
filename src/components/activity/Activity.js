import React from "react";
import Filters from "./Filters";
import List from "./List";
import SearchBar from "./Autofill";
import Sort from './Sort';

const Activity = () => {
  return (
    <div>
      <Filters />
      <Sort/>
      <SearchBar />
      <List />
    </div>
  );
};

export default Activity;
