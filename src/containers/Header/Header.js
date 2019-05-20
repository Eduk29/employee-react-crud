import React from "react";
import Masthead from "../../components/Masthead";
import TopMenu from "../../components/TopMenu";

const Header = (props) => {
  return (
    <div>
      <TopMenu title={ props.topMenuTitle } />
      <Masthead title={ props.mastheadTitle } class='d-flex flex-row justify-content-center align-items-center masthead masthead-background' />
    </div>
  );
};

export default Header;
