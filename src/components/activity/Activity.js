import React from "react";
import Filters from "./Filters";
import List from "./List";
import Sort from "./Sort";

const Activity = () => {
  return (
    <>
      <Filters />
      <Sort />
      <List className="list"/>
    </>
  );
};

export default Activity;
