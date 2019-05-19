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
          className={'p-0 idColumn header-cell-text-size'}
          colSpan='4'
          align='center'>
          Id
        </TableCell>
        <TableCell
          className={'p-0 nomeColumn header-cell-text-size'}
          colSpan='6'
          align='left'>
          Nome
        </TableCell>
        <TableCell
          className={'p-0 dataColumn header-cell-text-size'}
          colSpan='2'
          align='left'>
          Data de Nascimento
        </TableCell>
        <TableCell
          className={'p-0 cpfColumn header-cell-text-size'}
          colSpan='2'
          align='left'>
          CPF
        </TableCell>
        <TableCell
          className={'p-0 rgColumn header-cell-text-size'}
          colSpan='2'
          align='left'>
          RG
        </TableCell>
        <TableCell
          className={'p-0 telefoneColumn header-cell-text-size'}
          colSpan='1'
          align='left'>
          Telefone
        </TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default EmployeeTableHeader;
