import React, { useEffect, useState } from 'react'

export default function Child({getItem}) {
    const [items,setItems]=useState([])
    useEffect(()=>{

setItems(getItem())



    },[getItem])
  return (
    <div>
      {items && items.map(item=>{

return <div key={item}>{item}</div>

      })}
    </div>
  )
}
