// React
import React from "react";

// Containers
import Header from "../../containers/Header/Header";
import List from './../../containers/List/index';

const ListEmployee = () => {
  return (
    <div>
      <Header topMenuTitle="React CRUD Example APP" mastheadTitle="Employee List"/>
      <List />
    </div>
  );
};

export default ListEmployee;
