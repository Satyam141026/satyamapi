import React, { Component } from "react";
import "./index.css";

export default class Cl extends Component {
  constructor() {
    super();
    this.state = { name: "anil",
email:"satyam141026@gmail.com"

};
  }

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
    
        <h1>
          Name: {this.state.name} email:{this.state.email}
        </h1>
        <button onClick={()=>this.setState({name:"satyam"})}> Name change </button>
      </div>
    );
  }
}
