import React from 'react';
import "./Masthead.scss";

const Masthead = (props) => {
  return (
    <div className={ props.class }>
      <h1>{ props.title }</h1>
    </div>
  )
}

export default Masthead;
