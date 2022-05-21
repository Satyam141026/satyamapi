import React, { Component } from 'react'
import axios from 'axios';

export default class Postx extends Component {
    constructor(){
super()
this.state={

    "name": "morpheus",
    "job": "leader"
}


    }
    sendRequest(){
const url='https://reqres.in/api/users';
/*axios.post(url, this.state)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
  render() {
    
    return (
      <div>
        <button onClick={()=>this.sendRequest()}>Sendres</button>
      </div>
    )
  }
}
