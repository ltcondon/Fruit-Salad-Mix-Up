import React, { Component } from "react";
import "./style.css";

class Scoreboard extends Component {


    render() {
      return(
        <div>
          <h2 className='time'>Time: {this.props.time}</h2>
          <h2 className='score'>Score: {this.props.score}</h2>
        </div>
      );
    }
    
}

export default Scoreboard;