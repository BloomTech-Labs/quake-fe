import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import useDarkMode from "../../utils/customHooks/useDarkMode";

// General Icons
import { ReactComponent as FeedIcon } from "../../images/icons/feed-icon.svg";
import { ReactComponent as ReportIcon } from "../../images/icons/report-icon.svg";
import { ReactComponent as ActivityIcon } from "../../images/icons/activity-icon.svg";
import { ReactComponent as MenuIcon } from "../../images/icons/menu-icon.svg";
import { ReactComponent as PeopleIcon } from "../../images/icons/people-icon.svg";
import { ReactComponent as PhoneIcon } from "../../images/icons/phone-icon.svg";
import { ReactComponent as BookIcon } from "../../images/icons/book-icon.svg";
import { ReactComponent as ThemeIcon } from "../../images/icons/theme-icon.svg";
import { ReactComponent as FaqIcon } from "../../images/icons/faq-icon.svg";
import { ReactComponent as BugIcon } from "../../images/icons/bug-icon.svg";
import { ReactComponent as FilterIcon } from "../../images/icons/filter.svg";
import { ReactComponent as UnitIcon } from "../../images/icons/unit-toggle-icon.svg";

const Navigation = () => {
  const [viewMore, setViewMore] = useState(false);
  // Toggles Dark Mode CSS theme. See src/customHooks/useDarkMode.js
  const [darkMode, setDarkMode] = useDarkMode("dark-mode");

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav>
      <NavLink
        className="nav-link"
        activeStyle={{ background: "#65FFAE20" }}
        exact
        to="/feed"
      >
        <FeedIcon className="nav-icon" />
        <p>News</p>
      </NavLink>

      <a
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://earthquake.usgs.gov/earthquakes/eventpage/tellus"
      >
        <ReportIcon className="nav-icon" />
        <p>Report</p>
      </a>

      <NavLink
        className="nav-link"
        activeStyle={{ background: "#65FFAE20" }}
        exact
        to="/"
      >
        <ActivityIcon className="nav-icon" />
        <p>Activity</p>
      </NavLink>

      <div
        onClick={() => {
          setViewMore(!viewMore);
        }}
        className="nav-link"
        style={
          viewMore ? { background: "#65FFAE20" } : { background: "transparent" }
        }
      >
        <MenuIcon className="nav-icon" />
        <p>More</p>
      </div>

      <div
        onClick={() => {
          setViewMore(!viewMore);
        }}
        className={viewMore ? "more-links-focus" : "more-links-hidden"}
      >
        <div className="more-links-container">
          <div className="big-link-container">

            <NavLink to="/report">
              <BugIcon className="nav-icon" />
              <p>Report a Bug</p>
            </NavLink>

            <NavLink to="/" onClick={toggleDarkMode}>
              <ThemeIcon className="nav-icon" />
              <p>Toggle Light/Dark Theme</p>
            </NavLink>

            <NavLink to="/" >
              <UnitIcon className="nav-icon" />
              <p>Toggle Kilometers/Miles</p>
            </NavLink>

            <NavLink to="/about">
              <PeopleIcon className="nav-icon" />
              <p>About Us</p>
            </NavLink>

            <NavLink to="/">
              <PhoneIcon className="nav-icon" />
              <p>Setup Notifications</p>
            </NavLink>

            <NavLink to="/resources">
              <BookIcon className="nav-icon" />
              <p>Survival Info</p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
