import React from "react";
import Filters from "./Filters";
import List from "./List";
import SearchBar from "./Autofill";

const Activity = () => {
  return (
    <div>
      <Filters />
      <SearchBar />
      <List />
    </div>
  );
};

export default Activity;
