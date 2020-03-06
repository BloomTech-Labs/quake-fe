import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

function Navigation(props) {

    const [hidden, setHidden] = useState(true);
    return (

    <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href="map">Home</NavbarLink>
        <NavbarLink light brand href="dashboard">Dashboard</NavbarLink>
        <NavbarLink light brand href="safetytips">Safety Tips</NavbarLink>
        <NavbarLink light brand href="signup">Sign Up</NavbarLink>
        <NavbarLink light brand href="login">Log In</NavbarLink>
        <NavbarLink light brand href="logout">Log Out</NavbarLink>

        <Nav end>
          <Button
            light
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
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
        <Link to="/signup">
            <NavbarLink light>signup</NavbarLink>
        </Link>
        <Link to="/login">
            <NavbarLink light>login</NavbarLink>
        </Link>
        <Link to="/logout">
            <NavbarLink light>logout</NavbarLink>
        </Link>
      </Nav>
    </Navbar>

    );
}
export default Navigation;