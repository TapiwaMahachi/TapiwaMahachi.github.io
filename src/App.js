import React, { useState }  from "react"

//import Footer from './components/Footer';
import Header from './components/Header';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import ThemeContext from "./ThemeContext";


import './css/_style.scss'


function  App(props){

  //hook for our theme
  const [theme, setTheme] = useState('light');
  
 
    
    return (
      
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
        <Intro />
        <Projects project ={props.projects} />
        <About />
        <Footer />
      </ThemeContext.Provider>
   
    );
  
}

export default App;
