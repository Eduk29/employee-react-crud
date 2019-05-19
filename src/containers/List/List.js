// React
import React, { Component } from 'react';

// Components
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

// Service
import * as EmployeeService from '../../services/EmployeeService';

const initialState = {
  employees: [],
  pageInformations: {
    pageIndex: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 50, 100]
  }
};

export class List extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // LifeCycle Methods
  componentDidMount() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    EmployeeService.getEmployeeList().then(data => {
      let employees = { ...this.state.employees };
      employees = data;
      this.setState({ employees });
    });
  }

  render() {
    return (
      <div className='container'>
        <h2>Container List</h2>
        <EmployeeTable employees={ this.state.employees } pageInformations={ this.state.pageInformations } />
      </div>
    );
  }
}
export default List;
