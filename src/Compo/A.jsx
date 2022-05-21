import React, { Component, createContext } from 'react'
import B from './B';

const FirstName=React.createContext()
const lastName=React.createContext()

 class A extends Component {
  render() {
    return (
      <div>
          <FirstName.Provider value="satyamsharma">
          <lastName.Provider value="Jaya Kannojiya">    
        <B/>
        </lastName.Provider> 
        </FirstName.Provider>

      </div>
    )
  }
}
export default A;
export {FirstName,lastName};
  ////////Context upi