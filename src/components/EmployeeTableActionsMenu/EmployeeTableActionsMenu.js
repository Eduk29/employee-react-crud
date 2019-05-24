// React
import React from "react";
import { Link } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// Material
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";

// Styles
import "./EmployeeTableActionsMenu.scss";
import RemoveModal from "../RemoveModal/RemoveModal";

const EmployeeTableActionsMenu = props => {
  return (
    <div>
      <Link to={`${props.id}/update`}>
        <FontAwesomeIcon
          className={"mx-2 pointer icon-size icon-color"}
          icon={faPencilAlt}
        />
      </Link>
      <Link to={`${props.id}/details`}>
        <FontAwesomeIcon
          className={"mx-2 pointer icon-size icon-color"}
          icon={faSearch}
        />
      </Link>
      <IconButton aria-label="Delete" onClick={props.handleOpenModal}>
        <DeleteIcon fontSize="small" className={"icon-color"} />
      </IconButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.openModal}
        onClose={props.handleClose}
      >
        <RemoveModal />
      </Modal>
    </div>
  );
};

export default EmployeeTableActionsMenu;
