import React from "react";

import MenuItem from "./menuItem";

const SideBar = ({ menuItems }) => {
  // use spread to avoid mutating array
  const sortedMenuItems = [...menuItems].sort((obj1, obj2) => {
    if (obj1.index > obj2.index) return 1;
    if (obj1.index < obj2.index) return -1;
    return 0;
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              {sortedMenuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  label={item.name}
                  categoryId={item.id}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
