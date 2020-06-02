import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as FaultlineLogo } from '../images/Faultline_Logo.svg';

const Header = () => {
    return (
        <div className="header">
            <FaultlineLogo className="header-logo"/>
            <h1 className="site-title">FaultLine</h1>
            <div className="hamburger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;