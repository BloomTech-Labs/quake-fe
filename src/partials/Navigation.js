  
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu>
        <Menu.Item as={Link} to='/report' name='Report' />
        <Menu.Item as={Link} to='/activity' name='Activity' />
        <Menu.Item as={Link} to='/feed' name='News Feed' />
    </Menu>
  );
};

export default Navigation;