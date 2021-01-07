import React from 'react';


function Header(){

    return(
            <header className="header" >
                <a className="logo"href={"#home"}>
                <span className="logo-btn">DevTapiwa</span>
                </a>
                <nav >
                    <ul className="nav-list">
                        <li><a className="nav-link" href={"#home"}>Home</a></li>
                        <li><a className="nav-link" href={"#projects"}>Projects</a></li>
                        <li><a className="nav-link" href={"#about"}>About</a></li>
                        <li><a className="nav-link" href="https://my.indeed.com/p/tapiwam-g6lrjhh">
                            resume<i className="fas fa-file"></i>
                            </a>
                        </li>
                    </ul>
                </nav>          
                <button  
                    className="nav-toggle" 
                    aria-label="toggle-navigation" 
                    onClick={()=>{document.body.classList.toggle('nav-open') }}
                >
                <span  className="hamburger"></span>
                </button>
            </header>
        )
 };
 
export default Header;