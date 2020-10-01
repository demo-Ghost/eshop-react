import React from "react";

const MainPageContent = ({ children }) => {
  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-10">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default MainPageContent;
