import React from "react";
import "./DestinationStyles.css";

function DestinationData(props) {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.pTitle}</h2>
        <p>{props.p}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
      </div>
    </div>
  );
}

export default DestinationData;
