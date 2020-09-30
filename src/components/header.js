import React from "react";
import NavBar from "react-bootstrap/Navbar";

import SearchBar from "./searchBar";

const Header = () => {
  return (
    <NavBar className="top-nav bg-secondary" fixed="top">
      Antonis Nikolaidis
      <SearchBar />
    </NavBar>
  );
};

export default Header;
