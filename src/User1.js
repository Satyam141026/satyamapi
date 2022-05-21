//import React, {useState } from 'react'
import React from 'react'

const a={Name:"jaya kannojiya"}
function User1(props) {
    return (
      <div className="App">
     <h1>hello ram</h1>
<button  onClick={()=>props.alert(a)}>btn</button>
      </div>
    );
  }
  
  export default User1;
  