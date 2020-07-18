import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CurrentPage from "./CurrentPage";

// Icons
import { ReactComponent as FeedIcon } from "../images/feed-icon.svg";
import { ReactComponent as ReportIcon } from "../images/report-icon.svg";
import { ReactComponent as ActivityIcon } from "../images/activity-icon.svg";
import { ReactComponent as MenuIcon } from "../images/menu-icon.svg";
import { ReactComponent as PeopleIcon } from "../images/people-icon.svg";
import { ReactComponent as PhoneIcon } from "../images/phone-icon.svg";
import { ReactComponent as BookIcon } from "../images/book-icon.svg";
import { ReactComponent as ThemeIcon } from "../images/theme-icon.svg";
import { ReactComponent as FaqIcon } from "../images/faq-icon.svg";
import { ReactComponent as BugIcon } from "../images/bug-icon.svg";
import { ReactComponent as FilterIcon } from "../images/filter.svg";

const Navigation = () => {
  let location = useLocation();
  const [viewMore, setViewMore] = useState(false);

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

      <div
        onClick={() => {
          setViewMore(!viewMore);
        }}
        className="nav-link"
        style={
          viewMore ? { background: "#cccccc40" } : { background: "transparent" }
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
          <div className="more-links">
            <div className="currently-open">
              <h1>Currently Open</h1>

              <CurrentPage location={location.pathname} />
            </div>

            <div className="quick-access">
              <h1>Quick Access</h1>

              <NavLink to="/">
                <ReportIcon className="nav-icon" />
                <p>Report an Event</p>
              </NavLink>

              <NavLink to="/">
                <FeedIcon className="nav-icon" />
                <p>Access News Feed</p>
              </NavLink>

              <NavLink to="/">
                <BugIcon className="nav-icon" />
                <p>Report a Bug</p>
              </NavLink>

              <NavLink to="/">
                <FaqIcon className="nav-icon" />
                <p>Frequently Asked Questions</p>
              </NavLink>

              <NavLink to="/">
                <ThemeIcon className="nav-icon" />
                <p>Toggle Light/Dark Theme</p>
              </NavLink>
            </div>
          </div>

          <div className="big-link-container">
            <NavLink to="/about">
              <PeopleIcon className="nav-icon" />
              <p>About Us</p>
            </NavLink>

            <NavLink to="/">
              <PhoneIcon className="nav-icon" />
              <p>Setup Notifications</p>
            </NavLink>

            <NavLink to="/">
              <BookIcon className="nav-icon" />
              <p>Survival Info</p>
            </NavLink>

            <NavLink to="/">
              <FilterIcon className="nav-icon" />
              <p>Filter Results</p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
