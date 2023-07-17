
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';






function App() {
  return (
   <div className='app'>
    <Header/>
    <BrowserRouter>
    <TopContainer/>
    </BrowserRouter>
    <SkillContainer/>
    <BrowserRouter>
   
    <Project/>
    <Contact/>
    </BrowserRouter>
   
   </div>
  );
}

export default App;