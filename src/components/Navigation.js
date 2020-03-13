import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

function Navigation(props) {

    const [hidden, setHidden] = useState(true);
    return (

    <Navbar expandSm light>
      <Nav start collapse expandSm hidden={hidden}>
        <Link to="/map">
            <NavbarLink light>home</NavbarLink>
        </Link>
        <Link to="/dashboard">
            <NavbarLink light>dashboard</NavbarLink>
        </Link>
        <Link to="/safetytips">
            <NavbarLink light>safetytips</NavbarLink>
        </Link>
        <Link to="/logout">
            <NavbarLink light>logout</NavbarLink>
        </Link>
      </Nav>
    </Navbar>

    );
}
export default Navigation;