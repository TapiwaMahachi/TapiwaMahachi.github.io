import React from 'react';



function Header(){

   
    //function to handle the humburger clicks
    const toggle =()=>{
        const navList = document.querySelectorAll('.nav-link');

        //adding a class of nav-open to the body of the document
        document.body.classList.toggle('nav-open');
        
        //removing the added class from the body and closing the humburger
        navList.forEach(link =>{
            link.addEventListener('click', ()=>{
                document.body.classList.remove('nav-open');
            });
        });
    };

    return(
            <header className="header" >
                <a className="logo"href={"#home"}>
                <span className="logo-btn">DevTapiwa</span>
                </a>
                 <button  
                    className="nav-toggle" 
                    aria-label="toggle navigation" 
                    onClick={toggle}
                >
                    <span  className="hamburger"></span>
                </button>
                <nav  className="nav">
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
               
            </header>
        )
 };
 
export default Header;