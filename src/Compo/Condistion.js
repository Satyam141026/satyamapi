import React from "react";
import { useState } from "react";


export default  function Condistion() {




    const[data,printData]=useState(false);

return (
    <div className="App">
    { data?<h1>Hello user 1</h1>:null}
    <button type="button" onClick={()=>printData(!data)} className="btn btn-warning">Touggel</button><br></br>




    </div>

   
  );
}
