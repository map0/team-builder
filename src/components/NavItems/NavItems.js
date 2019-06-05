import React from "react";
import "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => {
  return (
    <ul className="navigation">
      <NavItem link="/">Home</NavItem>&nbsp;/&nbsp;
      <NavItem link="Profile">Profile</NavItem>&nbsp;/&nbsp;
      <NavItem link="Counterparts">Counterparts</NavItem>&nbsp;/&nbsp;
    </ul>
  );
};

export default NavItems;
