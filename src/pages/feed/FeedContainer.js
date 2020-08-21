/* eslint-disable no-eval */
import React from "react";
import { useMediaQuery } from "react-responsive";
import Feed from "./Feed";

const FeedContainer = () => {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 800px)",
  });

  return (
    <div
      id="feed-container"
      className={`${
        isBigScreen ? "persistant-container" : "main-container"
      } scroll`}
    >
      <Feed />
    </div>
  );
};

export default FeedContainer;
