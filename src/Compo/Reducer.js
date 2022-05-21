import React, { useState } from 'react'

export default function Reducer() {
    const [Count,setCount]=useState(0);
    
  return (
    <div>
      <button onClick={()=>setCount(Count+1)}>+++++++</button>
      <h1>Count{Count}</h1>
      <button onClick={()=>setCount(Count-1)}>-------</button>
      <button onClick={()=>setCount(Count*Count)}>********</button>
    </div>
  )
}
