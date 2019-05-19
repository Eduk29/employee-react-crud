// React
import React, { Component } from 'react';

// Components
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

// Service
import * as EmployeeService from '../../services/EmployeeService';

// Material
import { Table } from '@material-ui/core';


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

  // Methods
  getEmployeeList() {
    EmployeeService.getEmployeeList().then(data => {
      let employees = { ...this.state.employees };
      employees = data;
      this.setState({ employees });
    });
  }

  convertToLocaleDate(date) {
    let newDate = new Date(date);
    return newDate.toLocaleDateString('pt-BR');
  }

  handleChangePage = (event, page) => {
    const pageInformations = { ...this.state.pageInformations };
    pageInformations.pageIndex = page;
    this.setState({ pageInformations });
  };

  handleChangeRowsPerPage = event => {
    const pageInformations = { ...this.state.pageInformations };
    pageInformations.page = 0;
    pageInformations.pageSize = event.target.value;
    this.setState({ pageInformations });
  };

  // Render
  render() {
    return (
      <div className='container'>
        <Table className='w-100'>
          <EmployeeTable
            employees={this.state.employees}
            pageInformations={this.state.pageInformations}
            convertToLocaleDate={this.convertToLocaleDate}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Table>
      </div>
    );
  }
}
export default List;
