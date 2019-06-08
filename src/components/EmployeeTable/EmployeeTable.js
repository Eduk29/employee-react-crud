// React
import React, { Fragment } from 'react';

// Components
import EmployeeTableHeader from '../EmployeeTableHeader/EmployeeTableHeader';
import EmployeeTableRow from '../EmployeeTableRow';
import EmployeeTablePaginationActions from '../EmployeeTablePaginationActions/EmployeeTablePaginationActions';

// Material
import { TableFooter, TableRow, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    padding: 25,
    outline: 'none'
  }
}));

const EmployeeTable = props => {
  
  return (
    <Fragment>
      <EmployeeTableHeader />
      <EmployeeTableRow
        employees={props.employees}
        pageInformations={props.pageInformations}
        convertToLocaleDate={props.convertToLocaleDate}
        getModalStyle={getModalStyle}
        useStyles={useStyles}
        openModal={props.openModal}
        handleOpenModal={props.handleOpenModal}
        handleCloseModal={props.handleCloseModal}
      />
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={props.pageInformations.pageSizeOptions}
            count={props.employees.length}
            rowsPerPage={props.pageInformations.pageSize}
            page={props.pageInformations.pageIndex}
            labelRowsPerPage={'Itens por página: '}
            onChangePage={props.handleChangePage}
            onChangeRowsPerPage={props.handleChangeRowsPerPage}
            ActionsComponent={EmployeeTablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Fragment>
  );
};

export default EmployeeTable;
