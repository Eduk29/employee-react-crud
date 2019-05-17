import React from "react";
import Masthead from "../../components/Masthead";

const Header = () => {
  return (
    <div>
      <h1>Container Header</h1>
      <h2>TopNavabar Component</h2>
      <Masthead title='Masthead Component Title' class='d-flex flex-row justify-content-center align-items-center masthead masthead-background' />
    </div>
  );
};

export default Header;
