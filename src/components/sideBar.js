import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column"></ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
