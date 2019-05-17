import React from 'react';
import "./Masthead.scss";

const Masthead = (props) => {
  return (
    <div className={ props.class }>
      <h1 className="text-color">{ props.title }</h1>
    </div>
  )
}

export default Masthead;
