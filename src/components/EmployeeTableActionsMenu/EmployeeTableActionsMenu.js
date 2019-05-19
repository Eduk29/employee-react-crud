// React
import React from 'react';
import { Link } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Styles
import './EmployeeTableActionsMenu.scss';

const EmployeeTableActionsMenu = () => {
  return (
    <div>
      <Link to='/update'>
        <FontAwesomeIcon
          className={'mx-2 icon-size icon-color'}
          icon={faPencilAlt}
        />
      </Link>
      <Link to='/details'>
        {/* <Link to={`${this.props.id}'/details'`}> */}
        <FontAwesomeIcon
          className={'mx-2 icon-size icon-color'}
          icon={faSearch}
        />
      </Link>
      <FontAwesomeIcon
        className={'mx-2 icon-size icon-color'}
        icon={faTrashAlt}
      />
    </div>
  );
};

export default EmployeeTableActionsMenu;
