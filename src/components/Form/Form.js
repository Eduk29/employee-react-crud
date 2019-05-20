// React
import React from "react";

// Material
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers/";

// Moment
import MomentUtils from "@date-io/moment";

const Form = props => {
  return (
    <div className="w-100">
      <div className="row">
        <FormControl className="col-8 pr-4">
          <TextField
            required
            id="name"
            label="Name"
            value={props.employee.name}
            onChange={props.handleChange}
            margin="normal"
          />
        </FormControl>

        <FormControl className="col-4">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              clearable
              required
              label="Birthday"
              value={props.displayDateDatepicker}
              onChange={props.handleDateChange}
              format="DD/MM/YYYY"
              margin="normal"
              views={["year", "month", "day"]}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </div>

      
    </div>
  );
};

export default Form;
