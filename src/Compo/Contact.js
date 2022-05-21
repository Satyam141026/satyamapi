import { useLocation } from "react-router-dom";

export default function Contact() {

const location=useLocation();
console.warn(location);

  return (
    <div>
        <h1>Contact page</h1>
        <h1>{location.key}</h1>
      
    </div>
  )
}
