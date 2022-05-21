import { useState, Usestate } from "react";
function Stater() {
  const [data, setdata] = useState(0);
  function updatedata() {
    setdata(data + 1);
  }
  return (
    <div className="App">
      <h1>{data}</h1>

      <button onClick={updatedata}>Click here</button>
    </div>
  );
}

export default Stater;
