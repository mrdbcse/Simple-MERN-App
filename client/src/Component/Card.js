import React from "react";
import "./Card.css";

const Card = ({ name, stream }) => {
  return (
    <div>
      <div className='card details-card' style={{ width: "50rem" }}>
        <div className='card-body'>
          <b>Name:</b> {name}
          <p>
            <b>Stream:</b> <em>{stream}</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
