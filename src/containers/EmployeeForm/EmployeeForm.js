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

  // Methods
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

  displayDateDatepicker = () => {
    if (!!this.state && this.state.employee.birthday === "") {
      return null;
    }
    return moment(this.state.employee.birthday, "DD-MM-YYYY");
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.convertMomentToString();
    EmployeeService.postEmployee(this.state.employee).then(data => {
      console.log('Success Registration: ', data);
      this.props.history.push("/");
    });
  };

  handleBackOrCancel = event => {
    this.props.history.push("/");
  };

  convertMomentToString = async () => {
    const dateInDateFormat = this.state.employee.birthday.toDate();
    const dateInStringFormat = dateInDateFormat.toLocaleDateString("pt-BR");
    await this.handleDateChange(dateInStringFormat);
  };

  // Render
  render() {
    return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-2">
              <Photobox />
            </div>
            <form onSubmit={this.handleSubmit} className="col-10">
              <Form
                formMode={this.state.formMode}
                employee={this.state.employee}
                handleDateChange={this.handleDateChange}
                handleChange={this.handleChange}
                displayDateDatepicker={this.displayDateDatepicker()}
                handleBackOrCancel={this.handleBackOrCancel}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmployeeForm);
