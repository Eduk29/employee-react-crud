// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// Material
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';

// Styles
import './EmployeeTableActionsMenu.scss';
import RemoveModal from '../RemoveModal/RemoveModal';

const EmployeeTableActionsMenu = props => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link to={`${props.id}/update`}>
        <FontAwesomeIcon
          className={'mx-2 pointer icon-size icon-color'}
          icon={faPencilAlt}
        />
      </Link>
      <Link to={`${props.id}/details`}>
        <FontAwesomeIcon
          className={'mx-2 pointer icon-size icon-color'}
          icon={faSearch}
        />
      </Link>
      <IconButton aria-label='Delete' onClick={handleOpen}>
        <DeleteIcon fontSize='small' className={'icon-color'} />
      </IconButton>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}>
          <Fragment>
            <RemoveModal getModalStyle={props.getModalStyle} useStyles={props.useStyles} />
          </Fragment>
      </Modal>
    </div>
  );
};

export default EmployeeTableActionsMenu;
