import React from 'react';
import "./Masthead.scss";

const Masthead = (props) => {
  console.log('Props: ', props);
  return (
    <div className="d-flex flex-row justify-content-center align-items-center masthead masthead-background">
      <h1>{props.title}</h1>
    </div>
  )
}

export default Masthead;
