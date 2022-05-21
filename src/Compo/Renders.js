import React, { Component } from "react";

export default class Renders extends Component {
  constructor() {
    super();
    this.state = {
      name: "satyam",
      email: "satyam141026",
 
    };
  }

  render() {

    return (console.warn(" SATYAM SHARMA THIS IS", this.props,this.state.email));


  
  }
    
}
