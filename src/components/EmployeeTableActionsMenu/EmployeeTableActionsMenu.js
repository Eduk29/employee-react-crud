// React
import React from 'react';
import { Link } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPencilAlt,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

// Styles
import './EmployeeTableActionsMenu.scss';

const EmployeeTableActionsMenu = props => {
  return (
    <div>
      <Link to={`${props.id}/update`}>
        <FontAwesomeIcon
          className={'mx-2 icon-size icon-color'}
          icon={faPencilAlt}
        />
      </Link>
      <Link to={`${props.id}/details`}>
        <FontAwesomeIcon
          className={'mx-2 icon-size icon-color'}
          icon={faSearch}
        />
      </Link>
      <Link to={`${props.id}/remove`}>
        <FontAwesomeIcon
          className={'mx-2 icon-size icon-color'}
          icon={faTrashAlt}
        />
      </Link>
    </div>
  );
};

export default EmployeeTableActionsMenu;
