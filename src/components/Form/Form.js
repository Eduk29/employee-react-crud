// React
import React from "react";

// Components
import { CPF_MASK, RG_MASK, TEL_MASK } from "../Regex/Regex";
import { Mask } from "../Mask/Mask";

// Styles
import "./Form.scss";

// Material
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";

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

      <div className="row mt-1">
        <FormControl required className="col-4 pr-4">
          <InputLabel required htmlFor="cpf">
            CPF
          </InputLabel>
          <Input
            value={props.employee.cpf}
            onChange={props.handleChange}
            id="cpf"
            inputComponent={Mask}
            inputProps={{ mask: CPF_MASK }}
          />
        </FormControl>

        <FormControl required className="col-4 pr-4">
          <InputLabel required htmlFor="rg">
            RG
          </InputLabel>
          <Input
            value={props.employee.rg}
            onChange={props.handleChange}
            id="rg"
            inputComponent={Mask}
            inputProps={{ mask: RG_MASK }}
          />
        </FormControl>

        <FormControl required className="col-4">
          <InputLabel htmlFor="phone">Phone</InputLabel>
          <Input
            value={props.employee.phone}
            onChange={props.handleChange}
            id="phone"
            inputComponent={Mask}
            inputProps={{ mask: TEL_MASK }}
          />
        </FormControl>
      </div>

      <div className="row d-flex flex-row justify-content-end mt-5">
        {props.formMode === "create" ? (
          <div>
            <Button
              type="submit"
              variant="contained"
              className="accent-btn mr-2"
            >
              Create
            </Button>
            <Button
              type="button"
              variant="text"
              onClick={props.handleBackOrCancel}
            >
              Back to List
            </Button>
          </div>
        ) : null}
        {props.formMode === "update" ? (
          <div>
            <Button type="submit" variant="contained" className="mr-2">
              Update
            </Button>
            <Button
              type="button"
              variant="contained"
              onClick={props.handleBackOrCancel}
            >
              Cancel
            </Button>
          </div>
        ) : null}
        {props.formMode === "details" ? (
          <Button
            type="button"
            variant="contained"
            onClick={props.handleBackOrCancel}
          >
            Back to List
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
