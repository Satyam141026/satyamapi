import React, { Component } from "react";

export default class Didmount extends Component {
  constructor() {
   super();
    console.warn("constructor");
 
    }
  
/*componentDidMount(){

console.warn("Didmount");



}*/
componentDidUpdate(){

    console.warn("Update mount");
    
    
    
    }
  render() {
 
    return (
         console.warn("render")

        
        
        );


  
  }
    
}
