import React, { useState }  from "react"

//import Footer from './components/Footer';
import Header from './components/Header';
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import ThemeContext from "./ThemeContext";


import './css/_style.scss'


function  App(props){

  //hook for our theme
  const [theme, setTheme] = useState('light');
  
  //project lst
  const projectList = props.projects.map(project =>
    <Project
    title={project.title}
    img={project.img}
    id={project.id}
    key={project.id}
    description={project.description}
    accomplishments={project.accomplishments}
    link={project.link}
    />
    );
    
    return (
      
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
        <Intro />
        <section className="projects" id="projects">
          <h2 className="title">PROJECTS</h2>
          <h3 className="projects-subtitle">a selection of a range of projects</h3>
          <div className="projects-card">
            {projectList}
          </div>
        </section>
        <About />
        <Footer />
      </ThemeContext.Provider>
   
    );
  
}

export default App;
