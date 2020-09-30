import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" href="#">
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
