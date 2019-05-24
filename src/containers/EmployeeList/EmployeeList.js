// React
import React, { Component } from 'react';

// Components
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

// Service
import * as EmployeeService from '../../services/EmployeeService';

// Material
import { Table } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

// Initial State
const initialState = {
  employees: [],
  pageInformations: {
    pageIndex: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 50, 100]
  }, 
  openModal: false
};

export class EmployeeList extends Component {
  
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

  getModalStyle = () => {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  };

  useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      padding: 25,
      outline: "none"
    }
  }));
  
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

  handleOpenModal = () => {
    this.setState({openModal: true});
  };

  handleCloseModal = () => {
    this.setState({openModal: false});
  };

  // Render
  render() {
    return (
      <div className='container my-5'>
        <Table className='w-100'>
          <EmployeeTable
            employees={this.state.employees}
            pageInformations={this.state.pageInformations}
            convertToLocaleDate={this.convertToLocaleDate}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
            getModalStyle={this.getModalStyle}
            useStyles={this.useStyles}
            openModal={this.state.openModal}
          />
        </Table>
      </div>
    );
  }
}
export default EmployeeList;
