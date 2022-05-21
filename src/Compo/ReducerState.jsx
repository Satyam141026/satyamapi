import React, { useReducer, useState } from 'react'
const initalState={count:0}
const reducer=(state,action)=>{
    console.log(state,action)
switch (action.type) {
    case 'INCREMENT':
        return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}  

    default: return state
      
}


}
export default function ReducerState() {
    const [count,setCount]=useState(0)
    const [state,dispatch]=useReducer(reducer,initalState)
    
  return (
    <div>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
{state.count}
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
    </div>
  )
}
