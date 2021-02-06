import React from 'react';
import Project from './Project';



function Projects(props) {

     //project lst
  const projectList = props.project.map(project =>
    <Project
    title={project.title}
    img={project.img}
    id={project.id}
    key={project.id}
    description={project.description}
    accomplishments={project.accomplishments}
    github={project.github}
    url={project.url}
    />
    );
    return (
         <section className="projects" id="projects">
           <div className="circle left"></div>
          <div className="circle right"></div>
          <h2 >PROJECTS Kumama</h2>
          <h3 >a selection of a range of projects</h3>
          <div className="card">
            {projectList}
          </div>
        </section>
    )
}

export default Projects
