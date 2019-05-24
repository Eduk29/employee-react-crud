// React
import React from "react";

// Components
import EmployeeTableActionsMenu from "../EmployeeTableActionsMenu/EmployeeTableActionsMenu";

// Material
import { TableRow, TableCell, TableBody } from "@material-ui/core";

// Styles
import "./EmployeeTableRow.scss";

const EmployeeTableRow = props => {

  return (
    <TableBody>
      {props.employees
        .slice(
          props.pageInformations.pageIndex * props.pageInformations.pageSize,
          props.pageInformations.pageIndex * props.pageInformations.pageSize +
            props.pageInformations.pageSize
        )
        .map((employee, index) => (
          <TableRow key={index}>
            <TableCell
              className={"p-0 idColumn data-cell-text-size"}
              colSpan="4"
              align="center"
              scope="row"
            >
              {employee.id}
            </TableCell>
            <TableCell
              className={"p-0 nameColumn data-cell-text-size"}
              colSpan="6"
              align="left"
            >
              {employee.name}
            </TableCell>
            <TableCell
              className={"p-0 birthdayColumn data-cell-text-size"}
              colSpan="2"
              align="left"
            >
              {props.convertToLocaleDate(employee.birthday)}
            </TableCell>
            <TableCell
              className={"p-0 cpfColumn data-cell-text-size"}
              colSpan="2"
              align="left"
            >
              {employee.cpf}
            </TableCell>
            <TableCell
              className={"p-0 rgColumn data-cell-text-size"}
              colSpan="2"
              align="left"
            >
              {employee.rg}
            </TableCell>
            <TableCell
              className={"p-0 phoneColumn data-cell-text-size"}
              colSpan="1"
              align="left"
            >
              {employee.phone}
            </TableCell>
            <TableCell>
              <EmployeeTableActionsMenu
                id={employee.id}
                openModal={props.openModal}
                getModalStyle={props.getModalStyle}
                useStyles={props.useStyles}
                handleOpenModal={props.handleOpenModal}
                handleCloseModal={props.handleCloseModal}
              />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default EmployeeTableRow;
