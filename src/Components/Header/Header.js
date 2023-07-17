import React from 'react'
import {Link} from "react-scroll";
import "./Header.css";


const Header = () => {
  return (
    <div className="header">
        <div className='header_left'>
        <h3>MERN-STACK</h3>
        </div>
     <div className='header_right'>
      
    
     <Link to="home" smooth={true} spy={true} offset={-70} duration={500}>
        <h3>
      About Me
        </h3>
       </Link>

       {/* <Link to="myself" smooth={true} spy={true} offset={-140} duration={500}>
        <h3>
        About Me
        </h3>
        </Link>  */}

         
       <Link to="skill" smooth={true} spy={true} offset={-140} duration={500}>
        <h3>
            Skills
        </h3>
       </Link>

       
      
       <Link to="projects" smooth={true} spy={true} offset={-70}  duration={500}>
        <h3>
            Projects
        </h3>
       </Link>

        <Link to="contact" smooth={true}  spy={true} offset={-120}  duration={500}>
        <h3>
            Contact
        </h3>
        </Link>
        
       
     </div>
    </div>
  )
}

export default Header