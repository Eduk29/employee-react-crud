// React
import React from "react";

const RemoveModal = props => {
  
  const classes = props.useStyles();
    return (
    <div style={props.modalStyle} className={classes.paper}>
      <h1>Modal Remove</h1>
    </div>
  );
};

export default RemoveModal;
