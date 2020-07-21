import React from "react";
import { TriangleUp } from "./imageImports";

// title = title of section
// size = large-title to change styling to fit large title across 100% width
const TitleContainer = ({ title, size, customClickEvent }) => {
  const classes =
    size === "large-title" ? "title-container large-title" : "title-container";
  return (
    <div className={classes} onClick={customClickEvent}>
      <div className="inner-container">
        <h2 className="section-title">{title}</h2>
        <div className="img-container">
          <TriangleUp className="triangle-up closed" />
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
