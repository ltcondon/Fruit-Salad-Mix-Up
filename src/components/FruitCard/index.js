import React from "react";
import "./style.css";

function FruitCard(props) {
  return (
    
      <div className="img-container">
        <img className="fruit" alt={props.name} src={props.image} onClick={props.onClick} name={props.name}/>
      </div>

  );
}

export default FruitCard;
