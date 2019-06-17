// React
import React, { Fragment } from 'react';

// Components
import EmployeeTableHeader from '../EmployeeTableHeader/EmployeeTableHeader';
import EmployeeTableRow from '../EmployeeTableRow';
import EmployeeTablePaginationActions from '../EmployeeTablePaginationActions/EmployeeTablePaginationActions';

// Material
<<<<<<< HEAD
import { TableFooter, TableRow, TablePagination, makeStyles } from '@material-ui/core';

function getModalStyle() {
=======
import { TableFooter, TableRow, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const getModalStyle = () => {
>>>>>>> ab2fd9088df2d8d550926ef88ba0fecb4527363f
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
<<<<<<< HEAD
    transform: `translate(-${top}%, -${left}%)`,
=======
    transform: `translate(-${top}%, -${left}%)`
>>>>>>> ab2fd9088df2d8d550926ef88ba0fecb4527363f
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
<<<<<<< HEAD
    padding: '150px',
    outline: 'none',
  },
=======
    padding: 25,
    outline: 'none'
  }
>>>>>>> ab2fd9088df2d8d550926ef88ba0fecb4527363f
}));

const EmployeeTable = props => {

  const [modalStyle] = React.useState(getModalStyle);
  
  return (
    <Fragment>
      <EmployeeTableHeader />
      <EmployeeTableRow
        employees={props.employees}
        pageInformations={props.pageInformations}
        convertToLocaleDate={props.convertToLocaleDate}
<<<<<<< HEAD
        modalStyle={modalStyle}
        useStyles={useStyles}
=======
        getModalStyle={getModalStyle}
        useStyles={useStyles}
        openModal={props.openModal}
        handleOpenModal={props.handleOpenModal}
        handleCloseModal={props.handleCloseModal}
>>>>>>> ab2fd9088df2d8d550926ef88ba0fecb4527363f
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
