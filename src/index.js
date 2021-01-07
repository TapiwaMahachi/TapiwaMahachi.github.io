import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from './img/me.png'
import App from './App';

const PROJECTS = [
  {
    title: "Afrex e-commerce website",
    img: img,
    id: "port",
    description: "My e-comerce website i build whilst learning",
    accomplishments: "React, MaterialUi, Firebase, Authentication, Stripe Payment",
    link: "https://github.com/TapiwaMahachi"
  },
  {
    title: "To-do Web App",
    img: img,
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
