import React from 'react'
import { Element} from 'react-scroll';
import skilling from "../assests/creative.webp";
import './SkillContainer.css';

const SkillContainer = () => {
    return (
        <div>
        <h2 className='skill'>Skills</h2>
<p className='skill'>The Ablity To Do Something Well</p>
        
          <Element name='skill' className='skillContainer' id="skills">

<div className='skillcontainer_image'>
    <img src={skilling} alt="" />
</div> 
<div className='skillcontainer_text'>

          <div className='skillcaontainer_skillset'>
              <h4>Html</h4>
              <div class="progress">
  <div style={{width:'80%'}} class="progress-bar bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            
              
                  <div className='skillcaontainer_skillset'>
              <h4>Css</h4>
              <div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
             
              <div className='skillcaontainer_skillset'>
              <h4>Javascript</h4>
              <div class="progress">
  <div style={{width:'50%'}}class="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
             
                  </div>
              
                  <div className='skillcaontainer_skillset'>
              <h4>Reactjs</h4>
              <div class="progress">
  <div style={{width:'40%'}}class="progress-bar bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              
                  </div>
                  <div className='skillcaontainer_skillset'>
              <h4>Nodejs</h4>
              <div class="progress">
  <div style={{width:'30%'}}class="progress-bar bg-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              
                  </div>
                  <div className='skillcaontainer_skillset'>
              <h4>MongoDb</h4>
              <div class="progress">
  <div style={{width:'30%'}}class="progress-bar bg-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
              
                  </div>

                  <div className='skillcaontainer_skillset'>
              <h4>Mysql</h4>
              <div class="progress">
  <div style={{width:'40%'}}class="progress-bar bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
             
                  </div>

                 
          </div>
          </div>  
</div>



        </Element>
    </div>
  )
}

export default SkillContainer