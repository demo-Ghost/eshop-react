import React from "react";

import Header from "./header";
import SideBar from "./sideBar";

const Home = (props) => {
  return (
    <div>
      <Header />
      <SideBar />
      {props.children}
    </div>
  );
};

export default Home;
