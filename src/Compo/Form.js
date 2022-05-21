import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [pswd, setpswd] = useState("");
  const [error, setError] = useState({name:'',pswd:''});
  const login = (event) => {
    event.preventDefault();

    let usercount=0;
    if(name===''){

      usercount++
       setError((prevState)=>{
return {...prevState,name:"Username is required"}
      })
    }
    else{
      setError((prevState)=>{
        return {...prevState,name:""}
              })

    }
    if(usercount==0){


  
      console.log("name pswd", name, pswd);
     
      setName("")
      setpswd("")

    }
    else{
      console.log(error);
    }

    if(pswd===''){

      usercount++
       setError((prevState)=>{
return {...prevState,pswd:"pswd is required"}
      })
    }
    else{
      setError((prevState)=>{
        return {...prevState,pswd:""}
              })

    }



  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <br></br>
        {error.name && <p>{error.name}</p> }
        <input
          type="password"
          value={pswd}
          placeholder="Enter your pswd"
          onChange={(e) => {
            setpswd(e.target.value);
          }}
        />
        {error.name && <p>{error.pswd}</p> }

        <br></br>
        <input type="submit" />
        <br></br>
      </form>
    </div>
  );
}
