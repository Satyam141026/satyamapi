import React ,{createContext} from 'react'
import AC from './AC'

const FirstName=React.createContext();
const lastName=React.createContext()
export default function AB() {
  return (
    <div>
<FirstName.Provider value="satyamsharma">
         <lastName.Provider value="Jaya Kannojiya">    
        <AC/>
        </lastName.Provider> 
        </FirstName.Provider>
    </div>
  )
}

export {FirstName,lastName};