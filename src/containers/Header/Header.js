import React from "react";
import Masthead from "../../components/Masthead";
import TopMenu from "../../components/TopMenu";

const Header = () => {

  return (
    <div>
      {/* <h1>Container Header</h1> */}
      <TopMenu title="TopMenu Component Title" />
      <Masthead title="React CRUD Example App" class='d-flex flex-row justify-content-center align-items-center masthead masthead-background' />
    </div>
  );
};

export default Header;
