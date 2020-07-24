import React, {useContext} from 'react';

import Theme from "../Theme";
import ThemeContext from '../ThemeContext';


function Header(){

        const {theme, setTheme} = useContext(ThemeContext);
        const currentTheme = Theme[theme];
       
        return(
            <header className="header" >
                        <a className="logo"href={"D"}>
                            <span className="logo-btn">DevTapiwa</span>
                        </a>
                        <nav >
                            <ul className="nav-list">
                                    <li><a className="nav-link" href={"h"}>Home</a></li>
                                    <li><a className="nav-link" href={"P"}>Projects</a></li>
                                    <li><a className="nav-link" href={"A"}>About</a></li>
                            </ul>
                        </nav>
                        <div>
                         <a href="https://my.indeed.com/p/tapiwam-g6lrjhh">
                        resume
                             <i className="fas fa-file"></i></a>
                        </div>
        
                        <button 
                            className="contact-btn"
                            style={{
                                background: currentTheme.background,
                                color: currentTheme.foreground
                            }}
                            onClick={()=>{
                                setTheme(theme === "light" ? "dark" : "light")
                            }}
                        > contact &nbsp; me &nbsp;</button>

                        <button  
                            className="nav-toggle" 
                            aria-label="toggle-navigation" 
                            onClick={()=>{
                                document.body.classList.toggle('nav-open')
                            }}
                        >
                            <span  className="hamburger"></span>
                        </button>
            </header>
        )
 };       

export default Header;