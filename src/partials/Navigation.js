import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as FeedIcon } from "../images/feed-icon.svg";
import { ReactComponent as ReportIcon } from "../images/report-icon.svg";
import { ReactComponent as ActivityIcon } from "../images/activity-icon.svg";
import { ReactComponent as MenuIcon } from "../images/menu-icon.svg";

const Navigation = () => {
  const displayMoreLinks = () => {};

  return (
    <nav>
      <NavLink
        exact
        className="nav-link"
        activeStyle={{ background: "#cccccc40" }}
        to="/feed"
      >
        <FeedIcon className="nav-icon" />
        <p>News</p>
      </NavLink>

      <NavLink
        exact
        className="nav-link"
        activeStyle={{ background: "#cccccc40" }}
        to="/report"
      >
        <ReportIcon className="nav-icon" />
        <p>Report</p>
      </NavLink>

      <NavLink
        exact
        className="nav-link"
        activeStyle={{ background: "#cccccc40" }}
        to="/"
      >
        <ActivityIcon className="nav-icon" />
        <p>Activity</p>
      </NavLink>

      <div onClick="displayMoreLinks" className="nav-link">
        <MenuIcon className="nav-icon" />
        <p>More</p>
      </div>

      <div className="more-links-focus">
        <div className="more-links-container">
          <div className="more-links">
            <div className="currently-open">
              <h1>Currently Open</h1>

              <NavLink to="/">
                <ActivityIcon className="nav-icon" />
                <p>Make This Change</p>
              </NavLink>
            </div>

            <div className="quick-access">
              <h1>Quick Access</h1>

              <NavLink to="/">
                <ActivityIcon className="nav-icon" />
                <p>Report an Event</p>
              </NavLink>

              <NavLink to="/">
                <ActivityIcon className="nav-icon" />
                <p>Access News Feed</p>
              </NavLink>

              <NavLink to="/">
                <ActivityIcon className="nav-icon" />
                <p>Report a Bug</p>
              </NavLink>

              <NavLink to="/">
                <ActivityIcon className="nav-icon" />
                <p>Frequently Asked Questions</p>
              </NavLink>

              <NavLink to="/">
                <ActivityIcon className="nav-icon" />
                <p>Toggle Light/Dark Theme</p>
              </NavLink>
            </div>
          </div>

          <div className="big-link-container">
            <NavLink to="/">
              <ActivityIcon className="nav-icon" />
              <p>About Us</p>
            </NavLink>

            <NavLink to="/">
              <ActivityIcon className="nav-icon" />
              <p>Setup Notifications</p>
            </NavLink>

            <NavLink to="/">
              <ActivityIcon className="nav-icon" />
              <p>Survival Info</p>
            </NavLink>

            <NavLink to="/">
              <ActivityIcon className="nav-icon" />
              <p>Filter Results</p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
