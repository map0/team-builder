import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = props => {
  return (
    <NavLink to={props.link}>
      <li className="navItem">{props.children}</li>
    </NavLink>
  );
};

export default NavItem;
