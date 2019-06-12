// React
import React, { Fragment } from 'react';

// Components
import EmployeeTableHeader from '../EmployeeTableHeader/EmployeeTableHeader';
import EmployeeTableRow from '../EmployeeTableRow';
import EmployeeTablePaginationActions from '../EmployeeTablePaginationActions/EmployeeTablePaginationActions';

// Material
import { TableFooter, TableRow, TablePagination, makeStyles } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    padding: '150px',
    outline: 'none',
  },
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
        modalStyle={modalStyle}
        useStyles={useStyles}
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
