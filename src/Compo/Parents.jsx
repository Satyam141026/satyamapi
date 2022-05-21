import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parents() {
    const [countone,setCount1]=useState(0)
    const [countTwo,setCount2]=useState(0)
    const getItem=useCallback(()=>{
        console.log(countTwo+1,countTwo-1);
        for(let i=0;i<1000000000;i++){}
        console.log("getitems");
                return [countTwo+1,countTwo-1]
        
            },[countTwo])
  
  return (
    <div>
      <button onClick={()=>setCount1(countone+1)}> Countone1:{countone}  </button>
      <button onClick={()=>setCount2(countTwo+1)}> Counttwo:{countTwo}  </button>
      <Child getItem={getItem}/>
    </div>
  )
}
