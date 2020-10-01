import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ categoryId, label }) => {
  return (
    <li className="nav-item">
      <NavLink
        activeClassName="active"
        className="nav-link"
        to={`/category/${categoryId}`}
      >
        {label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
