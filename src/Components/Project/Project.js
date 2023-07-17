import React from 'react'
import { Element} from 'react-scroll';
import { NavLink } from "react-router-dom";
import './Project.css'
import calc from "../assests/calc.jfif";
import rest from "../assests/rest.png";
import ice from '../assests/icee.jfif';

const Project = () => {
  return (
    <div>
        <h3 className='projects'>Projects</h3>
        <Element name="project" id='pro'>
        
        <section class="pricing py-5">
            <div class="container">
                <div class="row">


                <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">CALCULATOR</h3>
                                <img src={calc} alt="dictionery" />
                                <div>
                                    <p></p>
                                </div>
                                <div class="d-grid btn-section">
                                <NavLink to="https://glistening-sawine-6e41c8.netlify.app/"  class="btn btn-secondary btn-sm" className='btn' >Display</NavLink>
                               <NavLink to="https://github.com/Brindha-sree/Task9--Day15.git"   class="btn btn-secondary btn-sm" className='btn' >Source</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">REST COUNTRIES API</h3>
                                <img src={rest} alt="dictionery" />
                                <div>
                                  
                                </div>
                                <div class="d-grid btn-section">
                                <NavLink to="https://lively-basbousa-fe8e92.netlify.app/"  class="btn btn-secondary btn-sm" className='btn' >Display</NavLink>
<NavLink to="https://github.com/Brindha-sree/Task11-Rest-and-Weather.git"   class="btn btn-secondary btn-sm" className='btn' >Source</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="card mb-10 mb-lg-0">
                            <div class="card-body">
                                <h3 class="card-title text-uppercase text-center">ICE-FIRE-BOOK</h3>
                                <img src={ice} alt="dictionery" />
                                <div>
                                    
                                </div>
                                <div class="d-grid btn-section">
                                <NavLink to="https://shiny-bunny-e3c81a.netlify.app/" class="btn btn-secondary btn-sm" className='btn' >Display</NavLink>
<NavLink to="https://github.com/Brindha-sree/ICE-API.git"   class="btn btn-secondary btn-sm" className='btn' >Source</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    

        </Element>
    </div>
  )
}

export default Project







