import React from 'react';

// Material
import { IconButton } from "@material-ui/core";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const EmployeeTablePaginationActions = props => {

  console.log('Props Pagination: ', props);
  
  const handleFirstPageButtonClick = event => {
    props.onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    props.onChangePage(event, props.page - 1);
  };

  const handleNextButtonClick = event => {
    props.onChangePage(event, props.page + 1);
  };

  const handleLastPageButtonClick = event => {
    props.onChangePage(
      event,
      Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1)
    );
  };

  return (
    <div className={'d-flex flex-row'}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={props.page === 0}
        aria-label='First Page'>
        <FirstPageIcon />
      </IconButton>

      <IconButton
        onClick={handleBackButtonClick}
        disabled={props.page === 0}
        aria-label='Previous Page'>
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={props.page >= Math.ceil(props.count / props.rowsPerPage) - 1}
        aria-label='Next Page'>
        <KeyboardArrowRight />
      </IconButton>

      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={props.page >= Math.ceil(props.count / props.rowsPerPage) - 1}
        aria-label='Last Page'>
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

export default EmployeeTablePaginationActions;
