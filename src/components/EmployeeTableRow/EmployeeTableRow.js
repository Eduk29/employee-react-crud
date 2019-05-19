import React from 'react';

import { TableRow, TableCell, TableBody } from '@material-ui/core';

const EmployeeTableRow = props => {
  console.log(props);
  return (
    <TableBody>
      {props.employees
        .slice(
          props.pageInformations.pageIndes * props.pageInformations.pageSize,
          props.pageInformations.pageIndex * props.pageInformations.pageSize +
            props.pageInformations.pageSize
        )
        .map((employee, index) => (
          <TableRow key={index}>
            <TableCell
              className={'p-0 idColumn data-cell-text-size'}
              colSpan='4'
              align='center'
              scope='row'>
              {employee.id}
            </TableCell>
            <TableCell
              className={'p-0 nomeColumn data-cell-text-size'}
              colSpan='6'
              align='left'>
              {employee.name}
            </TableCell>
            <TableCell
              className={'p-0 dataColumn data-cell-text-size'}
              colSpan='2'
              align='left'>
              teste
              {/* {this.convertToLocaleDate(employee.dataNascimento)} */}
            </TableCell>
            <TableCell
              className={'p-0 cpfColumn data-cell-text-size'}
              colSpan='2'
              align='left'>
              {employee.cpf}
            </TableCell>
            <TableCell
              className={'p-0 rgColumn data-cell-text-size'}
              colSpan='2'
              align='left'>
              {employee.rg}
            </TableCell>
            <TableCell
              className={'p-0 telefoneColumn data-cell-text-size'}
              colSpan='1'
              align='left'>
              {employee.phone}
            </TableCell>
            <TableCell>{/* <ActionMenu /> */}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default EmployeeTableRow;
