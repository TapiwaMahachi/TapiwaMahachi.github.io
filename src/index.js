import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const PROJECTS = [
  {
    title: "Portfolio",
    img: " ",
    id: "port",
    description: "The porfolio page i build whilst learning",
    accomplishments: " HTML/CSS and REACT",
    link: "https://github.com/TapiwaMahachi"
  },
  {
    title: "To-do Web App",
    img: " ",
    id: "todo",
    description: `To-do list that helps with adding task
                  and filtering between active , all and completed task activities 
                  `,
    accomplishments: "React, HTML/CSS, and Javascript",
    link: "https://github.com/TapiwaMahachi"
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App projects={PROJECTS}/>
  </React.StrictMode>,
  document.getElementById('root')
);
