import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";
import SubNav from "./subNav";

// General Icons
import { ReactComponent as FeedIcon } from "../../images/icons/feed-icon.svg";
import { ReactComponent as ReportIcon } from "../../images/icons/report-icon.svg";
import { ReactComponent as ActivityIcon } from "../../images/icons/activity-icon.svg";
import { ReactComponent as MenuIcon } from "../../images/icons/menu-icon.svg";

const activeStyle = { background: "#65FFAE20" };

const Navigation = () => {
  const [viewMore, setViewMore] = useState(false);
  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  const [sideView, setSideView] = useState(false);
  const toggleSideNews = () => {
    const container = document.getElementById("feed-container");
    if (!sideView) {
      container.style.transform = "translateX(0px)"
      setSideView(!sideView);
    } else {
      container.style.transform = "translateX(-400px)"
      setSideView(!sideView);
    }
  };

  return (
    <nav>
      <MediaQuery maxWidth={799}>
        <NavLink
          className="nav-link"
          activeStyle={activeStyle}
          exact
          to="/feed"
        >
          <FeedIcon className="nav-icon" /> <p>News</p>
        </NavLink>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <div onClick={toggleSideNews} className="nav-link">
          <FeedIcon className="nav-icon" /> <p>News</p>
        </div>
      </MediaQuery>

      <a
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://earthquake.usgs.gov/earthquakes/eventpage/tellus"
      >
        <ReportIcon className="nav-icon" /> <p>Report</p>
      </a>

      <NavLink className="nav-link" activeStyle={activeStyle} exact to="/">
        <ActivityIcon className="nav-icon" /> <p>Activity</p>
      </NavLink>

      <div
        onClick={toggleViewMore}
        className="nav-link"
        style={viewMore ? activeStyle : { background: "transparent" }}
      >
        <MenuIcon className="nav-icon" /> <p>More</p>
      </div>

      <div
        onClick={toggleViewMore}
        className={viewMore ? "more-links-focus" : "more-links-hidden"}
      >
        <SubNav />
      </div>
    </nav>
  );
};

export default Navigation;
