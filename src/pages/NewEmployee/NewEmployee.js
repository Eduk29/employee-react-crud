// React
import React from 'react';

// Containers
import Header from './../../containers/Header/index';
import Form from './../../containers/Form/index';

const NewEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Create a new employee"/>
      <Form />
    </div>
  )
}

export default NewEmployee;
