// React
import React from 'react';

const RemoveModal = props => {
  const [modalStyle] = React.useState(props.getModalStyle);
  const classes = props.useStyles();
  return (
    <div style={modalStyle} className={classes.paper}>
      <h1>Modal Remove</h1>
    </div>
  );
};

export default RemoveModal;
