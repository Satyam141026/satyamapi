import React, { Component } from "react";

export default class Lifecycle1 extends Component {
  constructor() {
    super();
this.state={

name:"satyam",
email:"satyam141026"

}
  }

  render() {
    return <h1>HI SATYAM SHARMA THIS IS {this.state.name}
    {this.state.email}
    
    </h1>;
  }
}
