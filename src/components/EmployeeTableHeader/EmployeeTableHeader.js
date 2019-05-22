// React
import React from 'react';

// Styles
import './EmployeeTableHeader.scss';

// Material
import { TableRow, TableCell, TableHead } from '@material-ui/core';

const EmployeeTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          className={'p-0 header-cell-text-size'}
          colSpan='4'
          align='center'>
          Id
        </TableCell>
        <TableCell
          className={'p-0 header-cell-text-size'}
          colSpan='6'
          align='left'>
          Name
        </TableCell>
        <TableCell
          className={'p-0 header-cell-text-size'}
          colSpan='2'
          align='left'>
          Birthday
        </TableCell>
        <TableCell
          className={'p-0 header-cell-text-size'}
          colSpan='2'
          align='left'>
          CPF
        </TableCell>
        <TableCell
          className={'p-0 header-cell-text-size'}
          colSpan='2'
          align='left'>
          RG
        </TableCell>
        <TableCell
          className={'p-0 header-cell-text-size'}
          colSpan='1'
          align='left'>
          Phone
        </TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default EmployeeTableHeader;
