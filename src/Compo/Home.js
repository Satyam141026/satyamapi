import React , {state} from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate();
  return (
    <div>
 <h1> Homepage  </h1>


 <button  onClick={()=>navigate('/contact',{ state: { sname: "John Doe" } })}>move Contact</button>
    </div>
  );
}
  export default Home;

