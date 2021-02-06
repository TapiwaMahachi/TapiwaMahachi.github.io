import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";

import './css/_style.scss'


function  App(props){

    return (
     <BrowserRouter>
        <Header />
        <Switch>
          
          <Route exact path="/projects">
            <Projects project={props.projects}/>
          </Route>
          <Route exact path="/" component={Intro} />
        </Switch>
        <Footer />
     </BrowserRouter>
    );
  
}

export default App;
