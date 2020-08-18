/* eslint-disable no-eval */
import React, { useState, useEffect } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import Sort from "./Sort";
import List from "./List";
import ViewType from "./viewType";

const view = [
  {
    view: "map",
    cheight: "inherit",
    ctransform: "translateY(calc(100% - 30px))",
    mheight: "calc(100% - 30px)",
  },
  {
    view: "combo",
    cheight: "calc(65% - 45px)",
    ctransform: "translateY(0)",
    mheight: "calc(35% + 45px)",
  },
  {
    view: "list",
    cheight: "calc(100% - 45px)",
    ctransform: "translateY(0)",
    mheight: "45px",
  },
];

const ResultsContainer = () => {
  const [viewType, setViewType] = useState("combo");

  const isBigScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });

  useEffect(() => {
    const container = document.getElementById("results-container");
    const map = document.getElementById("map-container");

    if (isBigScreen) {
      container.style.height = "100%";
      container.style.transform = "translateY(0)";
      map.style.height = "100%";
    } else {
      for (let i = 0; i < view.length; i++) {
        if (viewType === view[i].view) {
          container.style.height = view[i].cheight;
          container.style.transform = view[i].ctransform;
          map.style.height = view[i].mheight;
        }
      }
    }
  }, [viewType, isBigScreen]);

  return (
    <div id="results-container" className="results-container no-scroll">
      <MediaQuery maxWidth={799}>
        <ViewType viewType={viewType} setViewType={setViewType} />
      </MediaQuery>
      <Sort />
      <div className="earthquake-list-container scroll">
        <List />
      </div>
    </div>
  );
};

export default ResultsContainer;
