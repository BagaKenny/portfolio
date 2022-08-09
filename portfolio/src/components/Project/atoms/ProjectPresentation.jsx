import React from "react";
import "./projectpres.css";

import Data from "../../utils/data.json";

const ProjectPresentation = (props) => {
  return (
    <div>
      <div className="text-container">
        <p>
         {props.firstText}
        </p>
        <p>
        {props.secondText}
        </p>
        <p>
        {props.thirdText}
        </p>
        <p>
        {props.fourthText}
        </p>
      </div>
    </div>
  );
};

export default ProjectPresentation;
