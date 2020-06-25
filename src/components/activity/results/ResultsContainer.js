import React, { useState } from "react";
import List from "./List";

const ResultsContainer = () => {

  const [openList, setOpenList] = useState(true);

  const toggleList = (e) => {
    e.preventDefault();
    const container = document.getElementById('results-container');

    if (openList === true) {
      container.style.transform = "translateY(calc(100% - 30px))";
      setOpenList(false);
    } else {
      container.style.transform = "translateY(0)";
      setOpenList(true);
    };
  }

  return (
    <div id="results-container" className="results-container no-scroll">
      <div className="results-toggle" onClick={toggleList}></div>

      <div className="earthquake-list-container scroll">
        <List />
      </div>
    </div>
  );
};

export default ResultsContainer;
