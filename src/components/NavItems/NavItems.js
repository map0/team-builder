import React from "react";
import "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => {
  return (
    <ul className="navigation">
      <NavItem link="/">Home</NavItem>&nbsp;
      <NavItem link="Profile"> Profile</NavItem>
    </ul>
  );
};

export default NavItems;
