import React from 'react'
import {Link} from "react-scroll";
import { NavLink } from 'react-router-dom';
import "./TopContent.css";


const TopContent = () => {
  return (
    <div>

    <div className='topcontent'> 
    <div className='topcontent_container'>
      <h1>Hello, I Am Brindha  </h1>
    <h2>Full Stack Developer</h2>
        </div>   
       
    <a href="www.google.com">
    <NavLink to= 'https://drive.google.com/file/d/10MHiQ1Pzhs2XMGbQg53F4VU3lJuzbyBi/view' target="blank">
      <button className='btnn' >Download Resume</button>
      </NavLink>
      <Link to="projects" smooth={true}cduration={500}>
     
       <button className='btnnn'>My Work</button>
      </Link>
    </a>
    
    </div>
  
   
    <div className='myself-con'>
            <p> I Consider Myself To Be An Empowered Woman That Is Set On Impacting 
        Society  To Make This Better World.
</p>
<p>
        I Am Exicted To Start My Career In FULL STACK DEVELOPER.
            </p>
           
            <Link to="contact" smooth={true}  spy={true} offset={-120}  duration={500}>
            <button className='btn'>Connect With Me</button>
            </Link>
            </div>
 

  </div>
  )
}

export default TopContent