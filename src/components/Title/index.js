import React from "react";
import "./style.css";
import logo from "./Cuttingboard-final2.png"

function Title() {
  return (
  <div className="logo-wrapper">
    <img className="logo" src={logo} alt="board"></img>
  </div>
  );
}

export default Title;
