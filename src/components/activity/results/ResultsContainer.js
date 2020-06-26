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
      console.log("double click executes");

      if (fullList === false) {
        container.style.height = "calc(100% - 45px)";
        setFullList(true);
      } else {
        container.style.height = "calc(75% - 45px)";
        setFullList(false);
      }

      clearTimeout(clickTimeout);

      setClickTimeout(null);
    } else {
      console.log("click");

      setClickTimeout(
        setTimeout(() => {
          const container = document.getElementById("results-container");
          console.log("single click executes");

          if (openList === true) {
            container.style.transform = "translateY(calc(100% - 30px))";
            setOpenList(false);
          } else {
            container.style.transform = "translateY(0)";
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
