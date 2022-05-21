import { useParams } from "react-router-dom";



function About() {
  const para=useParams();

  return (
    <div>
      <h1>About {para.id}</h1>
      <p>This is my About</p>
    </div>
  )
}

  export default About;