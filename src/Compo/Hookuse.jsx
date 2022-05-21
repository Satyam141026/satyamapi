import React, { useEffect, useState } from 'react'

export default function Hookuse() {
    const [data,setState]=useState("posts");
    const [Count,setCount]=useState(0);
    const [items,setItems]=useState([])
    useEffect(()=>{
        console.log("Component did mount");
        
        
            },[])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/'+data)
        .then(response => response.json())
        .then(json => setItems(json))




console.log("Component did update");
return()=>{

//clean
console.log("unmount")

}

    },[data])
  return (
    <div>
      <button onClick={()=>{setCount(Count+1)}}>Count{Count}</button>
      <button onClick={()=>{setState('posts')}}>Posts</button>
      <button onClick={()=>{setState('comments')}}>Comments</button>
      <button onClick={()=>{setState('Users')}}>Users</button>
      <ul>
{items && items.map(item=>{
   return<> <li key={item.id}>{item.id}</li>
 <li>{item.name}</li>
 <li>{item.phone}</li>


   <li>{item.body}</li></>
})}



      </ul>

<br></br>
     <h1> {data}</h1>
    </div>
  )
}
