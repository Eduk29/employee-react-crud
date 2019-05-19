// React
import React from 'react';

// Components
import EmployeeTableHeader from '../EmployeeTableHeader/EmployeeTableHeader';
import EmployeeTableRow from '../EmployeeTableRow';

// Material
import { Table } from '@material-ui/core';

const EmployeeTable = props => {
  return (
    <div>
      <h2>EmployeeTable Component</h2>
      <Table className='w-100'>
        <EmployeeTableHeader />
        <EmployeeTableRow
          employees={props.employees}
          pageInformations={props.pageInformations}
          convertToLocaleDate={props.convertToLocaleDate}
        />
      </Table>
    </div>
  );
};

export default EmployeeTable;
