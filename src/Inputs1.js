import React from "react";
import { useState } from "react";
export default function Inputs1() {
  const [data1, PrintData1] =  useState("");
  const [data2, PrintData2] =  useState("");
  const [data3, PrintData3] = useState(false);
  function def(e){
e.preventDefault();
console.warn(data1,data2,data3)
  }
  function Clear(){
PrintData1("");
PrintData2("");
PrintData3("");
  }

 
  
  return (
    <div>

      <form onSubmit={def}>
      <label>Enter the Name</label>
      <input type="text" value={data1} size={50} onChange={(e)=>PrintData1(e.target.value)}></input> <br></br>
      <br></br>
      Select the langauage
      <select value={data2} onChange={(e)=>PrintData2(e.target.value)}>
      <option>Select option</option>
        <option>c</option>
        <option>java</option>
        <option>net</option>

        <option>core</option>
      </select>
      <label>accept the term and condition</label>
      <input type="checkbox" size={50} onChange={(e)=>PrintData3(e.target.checked)}></input>

      <br></br>
      <br></br>
  <button type="submit">Submits</button>

  <br></br>
      <br></br>
  <button onClick={Clear}>Clear</button>
      </form>
      <br></br>
 <h1>{data1}</h1>
 <h1>{data2}</h1>

    </div>
  );
}
