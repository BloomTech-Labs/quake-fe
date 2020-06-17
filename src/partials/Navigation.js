import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink className="nav-icon" activeStyle={{ color: "red" }} to="/report">
        Report
      </NavLink>
      <NavLink
        className="nav-icon"
        activeStyle={{ color: "red" }}
        to="/activity"
      >
        Activity
      </NavLink>
      <NavLink className="nav-icon" activeStyle={{ color: "red" }} to="/feed">
        News Feed
      </NavLink>
    </div>
  );
};

export default Navigation;
