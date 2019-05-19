// React
import React from 'react';

// Material
import { Table } from '@material-ui/core';
import EmployeeTableHead from '../EmployeeTableHead/EmployeeTableHead';
import EmployeeTableRow from '../EmployeeTableRow';

const EmployeeTable = props => {
  return (
    <div>
      <h2>EmployeeTable Component</h2>
      <Table className='w-100'>
        <EmployeeTableHead />
        <EmployeeTableRow employees={ props.employees } pageInformations={ props.pageInformations } />
      </Table>
    </div>
  );
};

export default EmployeeTable;
