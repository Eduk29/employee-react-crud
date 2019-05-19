// React
import React, { Fragment } from 'react';

// Components
import EmployeeTableHeader from '../EmployeeTableHeader/EmployeeTableHeader';
import EmployeeTableRow from '../EmployeeTableRow';
import EmployeeTablePaginationActions from '../EmployeeTablePaginationActions/EmployeeTablePaginationActions';

// Material
import { TableFooter, TableRow, TablePagination } from '@material-ui/core';

const EmployeeTable = props => {
  return (
    <Fragment>
      <EmployeeTableHeader />
      <EmployeeTableRow
        employees={props.employees}
        pageInformations={props.pageInformations}
        convertToLocaleDate={props.convertToLocaleDate}
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
