import React from 'react';
 
 
const DoneFrame = (props) => {

  return (
   <div className="text-center">
       <h2>{props.doneStatus}</h2>
       <button class="btn btn-secondary" onClick={props.reset}>Play again?</button>
   </div>
  );
}

export default DoneFrame;
