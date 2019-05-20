// React
import React from "react";

// Containers
import Header from "../../containers/Header/Header";
import EmployeeList from './../../containers/EmployeeList';

const ListEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Employee List"/>
      <EmployeeList />
    </div>
  );
};

export default ListEmployee;
