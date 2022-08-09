import React from "react";
import './technology.css';
const Technology = (props) => {
  return (
    <div>
      <div className="technology-container">
        <h2>Concept & Development : </h2>
        <div> <p><strong>Ui/UX : </strong> {props.ui}</p></div>
        {props.frontend && <div> <p><strong>FrontEnd : </strong> {props.frontend} </p></div>}
        <div> <a href={props.url}> Live Demo</a> </div>
      </div>
    </div>
  );
};

export default Technology;
