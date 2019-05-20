// React
import React from "react";

// Styles
import "./Photobox.scss";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Photobox = props => {
  return (
    <div className="d-flex flex-column align-items-center">
      <FontAwesomeIcon className="icon-user" icon={faUser} />
      <h5 className="pt-2"> {props.label} </h5>
    </div>
  );
};

export default Photobox;
