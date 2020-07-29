import React, { useState, useEffect } from "react";
import Sort from "./Sort";
import List from "./List";

// View Icons
import { ReactComponent as MapViewIcon } from "../../../images/icons/map-view-icon.svg";
import { ReactComponent as ComboViewIcon } from "../../../images/icons/combo-view-icon.svg";
import { ReactComponent as ListViewIcon } from "../../../images/icons/list-view-icon.svg";

const ResultsContainer = () => {
  const [viewType, setViewType] = useState("combo");

  useEffect(() => {
    const container = document.getElementById("results-container");
    const map = document.getElementById("map-container");

    if (viewType === "map") {
      container.style.transform = "translateY(calc(100% - 30px))";
      map.style.height = "calc(100% - 30px)";
    }
    if (viewType === "combo") {
      container.style.height = "calc(65% - 45px)";
      container.style.transform = "translateY(0)";
      map.style.height = "calc(35% + 45px)";
    }
    if (viewType === "list") {
      container.style.height = "calc(100% - 45px)";
      container.style.transform = "translateY(0)";
      map.style.height = "45px";
    }
  }, [viewType]);

  // function setViewType(viewType) {

  // }

  return (
    <div id="results-container" className="results-container no-scroll">
      <div className="results-toggle">
        <button
          onClick={() => {
            setViewType("map");
          }}
          style={
            viewType === "map"
              ? { background: "#65FFAE20" }
              : { background: "transparent" }
          }
        >
          <MapViewIcon className="view-button"/>
        </button>

        <button
          onClick={() => {
            setViewType("combo");
          }}
          style={
            viewType === "combo"
              ? { background: "#65FFAE20" }
              : { background: "transparent" }
          }
        >
           <ComboViewIcon className="view-button"/>
        </button>

        <button
          onClick={() => {
            setViewType("list");
          }}
          style={
            viewType === "list"
              ? { background: "#65FFAE20" }
              : { background: "transparent" }
          }
        >
          <ListViewIcon className="view-button" />
        </button>
      </div>
      <Sort />
      <div className="earthquake-list-container scroll">
        <List />
      </div>
    </div>
  );
};

export default ResultsContainer;
