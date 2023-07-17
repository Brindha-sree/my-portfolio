

import React from 'react'
import {Element} from 'react-scroll';
import {  FaHome, FaPhone ,FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./Contact.css";



const Contact = () => {
  return (
    <div>
        <div className='con'>
        <h1>Contact</h1>
    <h2 className='conn'>Connect With Me</h2>

        </div>
      
       
    
   <Element className="contact" id='contact'>
    
    <div className='contact-container'>
    <p> 
        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
         No.18,  Anugraha Nagar</p>
        
<p>
    Theni-625531
        </p>


               
                <p>
                <NavLink to="https://github.com/Brindha-sree">
                 <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/>GitHub</NavLink>
                </p>
                 <p>
                 <NavLink to="https://www.linkedin.com/in/brindha-sree-810487269/">
            <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>Linkedin
            </NavLink>
                 </p>

                 <p>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                9940969722  
                </p>
                <div className='email'>
                <p>
               
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                 srikannan547@gmail.com
               
                 
                </p>

                </div>
             </div> 
        
           
        
   </Element>
   </div>
  )
}

export default Contact