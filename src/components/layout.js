import React from "react";
//
import Header from "./header";
import MenuItem from "./menuItem";

const Layout = ({ categories }) => {
  return (
    <>
      <Header />
      <div className="container-fluid main-area">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                {categories.map((cat) => (
                  <MenuItem key={cat.id} label={cat.name} />
                ))}
              </ul>
            </div>
          </nav>
          <div className="offset-md-2 col-md-10 bg-dark main-area">yo</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
