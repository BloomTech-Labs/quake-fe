import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(props) {
    return (
        <div className="navigation">
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/safetytips">Safety tips</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
}
export default Navigation;