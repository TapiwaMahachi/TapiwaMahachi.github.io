import React, {useState} from 'react';

function Header(){

    //hook for toggling navigation
    const [navToggle, setNavToggle] = useState(document.querySelector('.nav-toggle'));

   function openMenu(e){
      setNavToggle( document.body.classList.toggle('nav-open') ); 
        
    };
    
        return(
            <header className="header">
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
        
                        <button 
                        className="contact-btn"
                        > contact &nbsp; me &nbsp;</button>

                        <button  
                            onClick={openMenu} 
                            className="nav-toggle" 
                            aria-label="toggle-navigation" 
                        >
                            <span  className="hamburger"></span>
                        </button>
            </header>
        )
 };       

export default Header;