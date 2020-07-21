import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import { ReactComponent as FeedIcon } from "../../images/feed-icon.svg";
import { ReactComponent as ReportIcon } from "../../images/report-icon.svg";
import { ReactComponent as ActivityIcon } from "../../images/activity-icon.svg";
import { ReactComponent as PeopleIcon } from "../../images/people-icon.svg";
import { ReactComponent as PhoneIcon } from "../../images/phone-icon.svg";
import { ReactComponent as BookIcon } from "../../images/book-icon.svg";
import { ReactComponent as ThemeIcon } from "../../images/theme-icon.svg";
import { ReactComponent as FaqIcon } from "../../images/faq-icon.svg";
import { ReactComponent as BugIcon } from "../../images/bug-icon.svg";
import { ReactComponent as FilterIcon } from "../../images/filter.svg";

const CurrentPage = ({ location }) => {
  if (location === "/") {
    return (
      <NavLink to="/">
        <ActivityIcon className="nav-icon" />
        <p>Activity</p>
      </NavLink>
    );
  } else
  if (location === "/activity") {
    return (
      <NavLink to="/activity">
        <ActivityIcon className="nav-icon" />
        <p>Activity</p>
      </NavLink>
    );
  } else
  if (location === "/feed") {
    return (
      <NavLink to="/feed">
        <FeedIcon className="nav-icon" />
        <p>News</p>
      </NavLink>
    );
  } else
  if (location === "/about") {
    return (
      <NavLink to="/about">
        <PeopleIcon className="nav-icon" />
        <p>About Us</p>
      </NavLink>
    );
  } else
  if (location === "/resources") {
    return (
      <NavLink to="/resources">
        <BookIcon className="nav-icon" />
        <p>Survival Info</p>
      </NavLink>
    );
  } else
  if (location === "/report") {
    return (
      <NavLink to="/report">
        <ReportIcon className="nav-icon" />
        <p>Report</p>
      </NavLink>
    );
  } else
  {
    return (
      <NavLink to="/">
        <BugIcon className="nav-icon" />
        <p>404</p>
      </NavLink>
    );
  }
};

export default CurrentPage;
