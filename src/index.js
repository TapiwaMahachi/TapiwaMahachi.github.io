import React from 'react';
import ReactDOM from 'react-dom';
import dev_img from './img/Desktop-App-Development-1.png'
import App from './App';

const PROJECTS = [
  {
    title: "E-commerce website",
    img: dev_img,
    id: "port",
    accomplishments: "E-commerce site build with React, MaterialUi, Firebase, Authentication, Stripe Payment",
    github: "https://github.com/TapiwaMahachi"
  },
  {
    title: "To-do Web App",
    img: dev_img,
    id: "todo",
    accomplishments: `Todo web-app built with React,HTML,CSS, Javascript,firebase `,
    github: "https://github.com/TapiwaMahachi",
    url: 'https://tapiwamahachi.github.io/todo-webapp/',
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App projects={PROJECTS}/>
  </React.StrictMode>,
  document.getElementById('root')
);
