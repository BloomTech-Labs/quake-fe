import React, { useState } from "react";
import Sort from "./Sort";
import List from "./List";

const ResultsContainer = () => {
  const [openList, setOpenList] = useState(true);
  const [fullList, setFullList] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);

  const handleClicks = (e) => {
    if (clickTimeout !== null) {
      const container = document.getElementById("results-container");
      const theMap = document.getElementById("map-container");

      if (openList === true) {
        if (fullList === false) {
          container.style.height = "calc(100% - 45px)";
          theMap.style.height = "45px";
          setFullList(true);
        } else {
          container.style.height = "calc(65% - 45px)";
          theMap.style.height = "calc(35% + 45px)";
          setFullList(false);
        }
      }

      clearTimeout(clickTimeout);

      setClickTimeout(null);
    } else {
      console.log("click");

      setClickTimeout(
        setTimeout(() => {
          const container = document.getElementById("results-container");
          const theMap = document.getElementById("map-container");
          console.log("single click executes");

          if (openList === true) {
            container.style.transform = "translateY(calc(100% - 30px))";
            theMap.style.height = "calc(100% - 30px)";
            setOpenList(false);
          } else {
            container.style.transform = "translateY(0)";
            theMap.style.height = "calc(35% + 45px)";
            setOpenList(true);
          }

          clearTimeout(clickTimeout);

          setClickTimeout(null);
        }, 200)
      );
    }
  };

  return (
    <div id="results-container" className="results-container no-scroll">
      <div className="results-toggle" onClick={handleClicks}></div>
      <Sort />
      <div className="earthquake-list-container scroll">
        <List />
      </div>
    </div>
  );
};

export default ResultsContainer;
