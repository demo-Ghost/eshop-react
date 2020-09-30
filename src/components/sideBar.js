import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/category">Category</NavLink>
        </li>
        <li>
          <NavLink to="/search-results">Search Results</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
