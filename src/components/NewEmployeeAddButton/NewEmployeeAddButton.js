// React
import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./NewEmployeeAddButton.scss";

// Material
import Fab from "@material-ui/core/Fab";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewEmployeeAddButton = () => {
  return (
    <div className="container d-flex flex-row-reverse add-button">
      <Link to={`/new`}>
        <Fab aria-label="Add">
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </Link>
    </div>
  );
};

export default NewEmployeeAddButton;
