import React from "react";
import "./Layout.css";

const Layout = props => {
  return (
    <>
      <div className="navigation">&nbsp;</div>
      <main className="content">{props.children}</main>
    </>
  );
};

export default Layout;
