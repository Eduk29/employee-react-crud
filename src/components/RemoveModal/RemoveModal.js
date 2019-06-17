// React
import React from 'react';

const RemoveModal = props => {
<<<<<<< HEAD
  
  const classes = props.useStyles();
    return (
    <div style={props.modalStyle} className={classes.paper}>
=======
  const [modalStyle] = React.useState(props.getModalStyle);
  const classes = props.useStyles();
  return (
    <div style={modalStyle} className={classes.paper}>
>>>>>>> ab2fd9088df2d8d550926ef88ba0fecb4527363f
      <h1>Modal Remove</h1>
    </div>
  );
};

export default RemoveModal;
