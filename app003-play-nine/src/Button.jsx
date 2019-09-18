import React from 'react';
import './Button.css';
 
const Button = (props) => {
  let button;
  let disabled = props.selectedNumbers.length === 0;
  switch (props.answerIsCorrect) {
    case true:
      button = (
        <button className="btn btn-success" disabled={disabled} onClick={props.acceptAnswer} >
          <i className="fa fa-check"></i> 
        </button>
      );
      break;
    case false:
      button = (
        <button className="btn btn-danger" disabled={disabled}>
          <i className="fa fa-times"></i>
        </button>
      );
      break;
    default:
      button = (
        <button className="btn btn-primary" disabled={disabled} onClick={props.checkAnswer}>
          =
          </button>
      );
      break;
  }


  return (
    <div className="col-md-2 text-center">
      {button}
      <br /><br />
      <button className="btn btn-warning btn-warning-text" onClick={props.redraw} disabled={props.redraws === 0}>
        <i className="fa fa-sync-alt"></i>&nbsp;{props.redraws}
      </button>
    </div>
  );
}

export default Button;
