import React, { Component } from "react";
import { FirstName, lastName } from "./A";

export default class D extends Component {
  render() {
    return (
      <>
        <FirstName.Consumer>
          {(fname) => {
            return (
                
              <lastName.Consumer>
                {(lname) => {
                  return (
                    <h1>
                      {fname} {lname}
                    </h1>
                  ) 
                }}
              </lastName.Consumer>
            );
          }}
        </FirstName.Consumer>
      </>
    );
  }
}
