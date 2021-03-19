import React from 'react';
import ReactDOM from 'react-dom';
import dev_img from './img/Desktop-App-Development-1.png'
import App from './App';

const PROJECTS = [
  {
    title: "E-commerce website",
    img: dev_img,
    id: "port",
    accomplishments: "E-commerce site built with React, MaterialUi, Firebase, Authentication, Stripe Payment",
    github: "https://github.com/TapiwaMahachi",
    url: "https://afrex-6f4a8.web.app"
  },
  {
    title: "Admin Dashboard",
    img: dev_img,
    id: "admin",
    accomplishments: `Stop managenent admin dashboard for creating and managing stock, users and suppliers`,
    github: "https://github.com/TapiwaMahachi",
    url: 'https://pure-basin-41999.herokuapp.com/',
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App projects={PROJECTS}/>
  </React.StrictMode>,
  document.getElementById('root')
);
