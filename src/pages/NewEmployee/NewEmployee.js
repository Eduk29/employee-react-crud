// React
import React from 'react';

// Containers
import Header from './../../containers/Header/index';
import EmployeeForm from './../../containers/EmployeeForm';

const NewEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Create a new employee"/>
      <EmployeeForm formMode='create' />
    </div>
  )
}

export default NewEmployee;
