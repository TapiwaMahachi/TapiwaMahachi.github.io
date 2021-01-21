import React from 'react';

import '../css/_header.scss';



function Header(){

   
    //function to handle the humburger clicks
    // const toggle =()=>{
    //     const navList = document.querySelectorAll('.nav-link');

    //     //adding a class of nav-open to the body of the document
    //     document.body.classList.toggle('nav-open');
        
    //     //removing the added class from the body and closing the humburger
    //     navList.forEach(link =>{
    //         link.addEventListener('click', ()=>{
    //             document.body.classList.remove('nav-open');
    //         });
    //     });
    // };

    const toggle =()=>{
        const header = document.querySelector('.header');
        const fadElement = document.querySelectorAll('.has-fade');
        const body = document.querySelector('body')

        if(header.classList.contains('nav-open')){
            body.classList.remove('noscroll');
            header.classList.remove('nav-open');
            fadElement.forEach(element => {
                element.classList.remove('fade-in');
                element.classList.add('fade-out')
            });
        }else{
            body.classList.add('noscroll')
            header.classList.add('nav-open')
            fadElement.forEach(element=>{
                element.classList.remove('fade-out')
                element.classList.add('fade-in')
            })
        }
    }

    return(
    <header className="header" >
        <div className="overlay has-fade"></div>
        <nav className="flex flex-jc-sb flex-ai-c">
            <a className="header__logo"href={"#home"}>
                <svg height="50px" width="100px">
                    <g>
                        <rect className="rect" width="100px" height="50" fill=" white"></rect>
                        <text x="10" y="35" height="45" fontSize="18" fill="hsl(233, 26%, 24%)">{`</>DevT`}</text>
                    </g>  
                </svg>
            </a>
            <button 
                className="header__nav-toggle hide-for-desktop" 
                aria-label="toggle navigation" 
                onClick={toggle}
            >
                <span  className="header__hamburger"></span>
            </button>
            {/* normal menu display on desktops */}
            <div className="header__links flex hide-for-mobile">
                <a className="link" href={"#home"}>Home</a>
                <a className="link" href={"#projects"}>Projects</a>
                <a className="link" href={"#about"}>About</a>
                <a className="link" href="https://my.indeed.com/p/tapiwam-g6lrjhh">
                    resume<i className="fas fa-file"/>
                </a>
            </div>
        </nav>
        {/* Menu that displays on mobile when you click the hamburger */}
         <div className="header__menu has-fade">
                <a  href={"#home"}>Home</a>
                <a  href={"#projects"}>Projects</a>
                <a  href={"#about"}>About</a>
                <a  href="https://my.indeed.com/p/tapiwam-g6lrjhh">
                    resume<i className="fas fa-file"/>
                </a>
            </div>
              
        
    </header>
        )
 };
 
export default Header;