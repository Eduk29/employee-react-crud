import React from "react";
import Photobox from "../../components/Photobox/Photobox";

const Form = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-2">
          <Photobox />
        </div>
        <div className="col-10"> EmployeeForm Component </div>
      </div>
    </div>
  );
};

export default Form;
