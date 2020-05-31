import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="myNav">
      <NavLink className="nav" activeStyle={{ color: "red" }} to="/report">
        Report
      </NavLink>
      <NavLink className="nav" activeStyle={{ color: "red" }} to="/activity">
        Activity
      </NavLink>
      <NavLink className="nav" activeStyle={{ color: "red" }} to="/feed">
        News Feed
      </NavLink>
    </div>
  );
};

export default Navigation;
