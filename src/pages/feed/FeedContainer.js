/* eslint-disable no-eval */
import React, { useState, useEffect } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import Feed from "./Feed";

const FeedContainer = () => {
  const [sideView, setSideView] = useState();

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
      {/* <MediaQuery maxWidth={799}>
        <ViewType viewType={viewType} setViewType={setViewType} />
      </MediaQuery> */}

      <Feed />
    </div>
  );
};

export default FeedContainer;
