// React
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Components
import Photobox from "../../components/Photobox/Photobox";
import Form from "./../../components/Form";

// Services
import * as EmployeeService from "../../services/EmployeeService";

// Moments Lib
import moment from "moment";
import Moment from "react-moment";

// Moment Library Config
Moment.globalMoment = moment;
Moment.globalLocale = "pt-br";
Moment.globalFormat = "dd/MM/yyyy";
Moment.globalTimezone = "America/Sao_Paulo";
Moment.globalLocal = true;

const initialState = {
  employee: {
    name: "",
    birthday: "",
    cpf: "",
    rg: "",
    phone: ""
  },
  formMode: ""
};

export class EmployeeForm extends Component {
  // Constructor
  constructor(props) {
    super(props);
    initialState.formMode = props.formMode;
    this.state = initialState;
  }

  // Lifecycle Hooks
  componentDidMount() {
    if (!!this.getUserIdFromParams()){
      EmployeeService.getEmployee(this.getUserIdFromParams()).then(data => {
        let employee = { ...this.state.employee };
        employee = data;
        this.setState({ employee });
      })
    }
  }

  // Methods
  displayDateDatepicker = () => {
    if (!!this.state && this.state.employee.birthday === "") {
      return null;
    }
    return this.state.employee.birthday;
  };

  convertMomentToISO = async () => {
    const dateInISOFormat = this.state.employee.birthday.toISOString();
    await this.handleDateChange(dateInISOFormat);
  };

  getUserIdFromParams = () => {
    return this.props.match.params.id;
  }

  isEditMode = () => {
    return ((this.state.formMode === 'create') || (this.state.formMode === 'update'))
  }

  // Handle Methods
  handleChange = event => {
    const key = event.currentTarget.id;
    const value = event.currentTarget.value;
    const employee = { ...this.state.employee };
    employee[key] = value;
    this.setState({ employee });
  };

  handleDateChange = date => {
    const employee = { ...this.state.employee };
    employee["birthday"] = date;
    this.setState({ employee });
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.convertMomentToISO();
    
    if (this.state.formMode === 'create') {
      EmployeeService.postEmployee(this.state.employee).then(data => {
        this.props.history.push("/");
      });
    } 

    if (this.state.formMode === 'update') {
      EmployeeService.updateEmployee(this.state.employee).then(data => {
        this.props.history.push("/");
      });
    }
    
  };

  handleBackOrCancel = event => {
    this.props.history.push("/");
  };

  // Render
  render() {
    return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-2">
              <Photobox label={this.state.employee.id} />
            </div>
            <form onSubmit={this.handleSubmit} className="col-10">
              <Form
                formMode={this.state.formMode}
                employee={this.state.employee}
                handleDateChange={this.handleDateChange}
                handleChange={this.handleChange}
                displayDateDatepicker={this.displayDateDatepicker()}
                handleBackOrCancel={this.handleBackOrCancel}
                isEditMode={this.isEditMode}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmployeeForm);
