import { useState } from "react";

function User() {
  const [text, setData] = useState("");
  const UpperCase = () => {
    let newdata=text.toUpperCase();
    setData(newdata);
  };
  const LowerCase = () => {
    let newdata=text.toLowerCase();
    setData(newdata);
  };



  const Enters = (e) => {
    setData(e.target.value);
  };
 
  

  return (
    <>
    <div className="container">
      <div className="App">
        <div className="input-group">
          <span className="input-group-text">First and last name</span>
          <input
            type="text"
            value={text}
            aria-label="First name"
            onChange={Enters}
            size="50"
            className="form-control"
          />
        
          <button className="btn btn-primary mx-2" onClick={UpperCase}> Change upper case  </button>
          <button className="btn btn-primary mx-2" onClick={LowerCase}> Change Lower case  </button>
        </div>
      </div>
    </div>

    <div className="container my-5">


<h1> {text.split(" ").length} Words    {text.length} Charecters    </h1>

<h1> {0.08* text.split(" ").length}Words read time </h1>
<h1> preview</h1>

<h2>    {text}</h2>
</div>

    </>
  );
}

export default User;
