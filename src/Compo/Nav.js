import {a, Outlet} from "react-router-dom";

function Nav() {

    return (
      <div>
     <a href="/">Home</a>
     <br></br>
      <a  href="/about" >About</a>
      <br></br>
      <a href="/about/:123">About us id</a>
  
      <br></br>
      <a href="/contact/">Contact</a>
  
  <br></br>


<Outlet/>
      </div>
    )
  }
  export default Nav;