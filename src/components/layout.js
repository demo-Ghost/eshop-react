import React from "react";

import Header from "./header";
import MainPage from "./mainPage";
import SideBar from "./ui/sideBar";

const Layout = ({
  categories,
  children,
  handleSearch,
  handleTagSelect,
  productTags,
}) => {
  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className="container-fluid main-area">
        <div className="row">
          <SideBar menuItems={categories} />
          <MainPage handleTagSelect={handleTagSelect} productTags={productTags}>
            {children}
          </MainPage>
        </div>
      </div>
    </>
  );
};

export default Layout;
