import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./ui/searchBar";

const Header = ({ handleSearch }) => {
  return (
    <nav className="navbar navbar-dark sticky-top fixed-top bg-dark flex-md-nowrap p-0">
      <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
        Antonis Nikolaidis
      </Link>
      <SearchBar handleSearch={handleSearch} />
    </nav>
  );
};

export default Header;
