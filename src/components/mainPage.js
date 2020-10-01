import React from "react";
import { useLocation } from "react-router-dom";

import FilterBar from "./ui/filterBar";
import MainPageContent from "./mainPageContent";

const MainPage = ({ children, handleTagSelect, productTags }) => {
  // check if page is category page, to conditionally render filter bar
  const location = useLocation();
  // compare 1st level slug with "category"
  const isProductPage = "category" === location.pathname.split("/")[1];

  return (
    <div className="container-fluid page-content">
      {isProductPage && (
        <FilterBar
          handleTagSelect={handleTagSelect}
          productTags={productTags}
        />
      )}
      <MainPageContent>{children}</MainPageContent>
    </div>
  );
};

export default MainPage;
