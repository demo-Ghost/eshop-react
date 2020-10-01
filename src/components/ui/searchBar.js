import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <>
      <div className="col-12 col-md-4 input-group my-1 mr-auto">
        <input
          aria-label="Search Products"
          className="form-control"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search Products"
          type="text"
        />
        <div className="input-group-append">
          <Link
            className="btn btn-outline-secondary"
            to={`/search/${searchTerm}`}
            type="button"
          >
            Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
