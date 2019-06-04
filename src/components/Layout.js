import React from "react";
import "./Layout.css";
import NavItems from "./NavItems/NavItems";

const Layout = props => {
  return (
    <>
      <NavItems />
      <main className="content">{props.children}</main>
    </>
  );
};

export default Layout;
