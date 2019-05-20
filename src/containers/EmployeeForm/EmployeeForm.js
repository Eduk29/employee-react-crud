// React
import React, { Component } from "react";

// Components
import Photobox from "../../components/Photobox/Photobox";
import Form from "./../../components/Form";

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

  displayDateDatepicker() {
    if (!!this.state && this.state.employee.birthday === "") {
      return null;
    }
    return moment(this.state.employee.birthday, "DD-MM-YYYY");
  }

  // Render
  render() {
    return (
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-2">
              <Photobox />
            </div>
            <form className="col-10">
              <Form
                employee={this.state.employee}
                handleDateChange={this.handleDateChange}
                handleChange={this.handleChange}
                displayDateDatepicker={this.displayDateDatepicker()}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeForm;
