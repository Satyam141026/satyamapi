import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [Count1,setCount1]=useState(0)
    const [Count2,setCount2]=useState(0)
    function Increment(){
setCount1(Count1+1)

    }
    function Decrement(){

setCount2(Count2-1)
    }
    const iseven=useMemo(()=>
    {
    for(let i=0;i<1000000000;i++){}
    return Count1%2===0
    
        },[Count1]
    )
  return (
    <div>
      <button onClick={Increment}> Count1={Count1} </button>
      {iseven?"even":"odd"}
      <button onClick={Decrement}>Count2={Count2}</button>
    </div>
  )
}
