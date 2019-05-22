// React
import React from 'react';

// Container
import Header from './../../containers/Header';
import EmployeeForm from './../../containers/EmployeeForm';

const UpdateEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Update Employee"/>
      <EmployeeForm formMode='update' />
    </div>
  )
}

export default UpdateEmployee;
