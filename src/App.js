import React, {useState} from "react"

//import Footer from './components/Footer';
import Header from './components/Header';
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";


function  App(props){
  
  //hook for projects
  const [projects, setProjects] = useState(props.projects);

  //project lst
  const projectList = projects.map(project =>
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
      <div>
          <Header/>  
        <section>
           <Intro/>
        </section>
        <section className="projects" id="projects">
            <h2 className="projects-title">PROJECTS</h2>
            <h3 className="projects-subtitle">a selection of a range of projects</h3>
            <div className="projects-card"> 
               {projectList}
            </div>         
      </section>
        <About/>   
        <Footer/>
      </div>
      
    );

  
}

export default App;
