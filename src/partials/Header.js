import React from "react";
import { ReactComponent as FaultlineLogo } from '../images/Faultline_Logo.svg';

const Header = () => {
    return (
        <div className="header">
            <FaultlineLogo className="header-logo"/>
            <h1 className="site-title">FaultLine</h1>
            <div className="search-header">
                <div className="search-icon"/>
            </div>
        </div>
    );
};

export default Header;