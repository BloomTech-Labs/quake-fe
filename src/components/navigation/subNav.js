import React from 'react';
import {NavLink} from "react-router-dom";
import useDarkMode from "../../utils/customHooks/useDarkMode";

// General Icons
import { ReactComponent as PeopleIcon } from "../../images/icons/people-icon.svg";
import { ReactComponent as PhoneIcon } from "../../images/icons/phone-icon.svg";
import { ReactComponent as BookIcon } from "../../images/icons/book-icon.svg";
import { ReactComponent as ThemeIcon } from "../../images/icons/theme-icon.svg";
import { ReactComponent as BugIcon } from "../../images/icons/bug-icon.svg";
import { ReactComponent as UnitIcon } from "../../images/icons/unit-toggle-icon.svg";

const Links = ({to, Icon, text, click}) => {
  return (
    <NavLink to={to} onClick={click}>
      <Icon className="nav-icon" />
      <p>{text}</p>
    </NavLink>
  )
}

const SubNav = () => {
  // Toggles Dark Mode CSS theme. See src/customHooks/useDarkMode.js
  const [darkMode, setDarkMode] = useDarkMode("dark-mode");
  const toggleDarkMode = (e) => {e.preventDefault();setDarkMode(!darkMode);};

  const linksList = [
    {to: '/report', Icon: BugIcon, text: 'Report a Bug', onClick: null},
    {to: '/', Icon: ThemeIcon, text: 'Toggle Light/Dark Theme', onClick: toggleDarkMode},
    {to: '/', Icon: UnitIcon, text: 'Toggle Kilometers/Miles', onClick: null},
    {to: '/about', Icon: PeopleIcon, text: 'About Us', onClick: null},
    {to: '/sms', Icon: PhoneIcon, text: 'Setup Notifications', onClick: null},
    {to: '/resources', Icon: BookIcon, text: 'Survival Info', onClick: null},
  ]

  return ( 
    <div className="more-links-container">
      <div className="big-link-container">
        {linksList.map((link, index) => {
          return <Links to={link.to} Icon={link.Icon} text={link.text} click={link.onClick} key={index}/>
        })}
      </div>
    </div>
   );
}
 
export default SubNav;