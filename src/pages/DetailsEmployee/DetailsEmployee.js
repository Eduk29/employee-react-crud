// React
import React from "react";

// Components
import Header from './../../containers/Header';
import EmployeeForm from './../../containers/EmployeeForm';

const DetailsEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Employee Details"/>
      <EmployeeForm formMode='details' />
    </div>
  );
};

export default DetailsEmployee;
