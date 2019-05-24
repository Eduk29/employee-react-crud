// React
import React from "react";

// Containers
import Header from "../../containers/Header/Header";
import EmployeeList from './../../containers/EmployeeList';

// Material
import NewEmployeeAddButton from "../../components/NewEmployeeAddButton";

const ListEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Employee List"/>
      <NewEmployeeAddButton />
      <EmployeeList />
    </div>
  );
};

export default ListEmployee;
