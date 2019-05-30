import React from "react";
import "./Layout.css";

const Layout = props => {
  return (
    <>
      <div>Navigation Placeholder</div>
      <main className="content">{props.children}</main>
    </>
  );
};

export default Layout;
