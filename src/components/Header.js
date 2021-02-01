import React from 'react';
import logo from '../img/portfolio-loggo.png'

import '../css/_header.scss';



function Header(){

    const toggle =()=>{
        const header = document.querySelector('.header');
        const fadElement = document.querySelectorAll('.has-fade');
        const body = document.querySelector('body');
        const mobile = document.querySelectorAll('.mobile-link');
        

        if(header.classList.contains('nav-open')){
            body.classList.remove('noscroll');
            header.classList.remove('nav-open');
            fadElement.forEach(element => {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }else{
            body.classList.add('noscroll');
            header.classList.add('nav-open');
            fadElement.forEach(element=>{
                element.classList.remove('fade-out')
                element.classList.add('fade-in')
            });
            mobile.forEach(link =>{
                link.addEventListener('click', ()=>{
                    body.classList.remove('noscroll');
                   header.classList.remove('nav-open');
                    fadElement.forEach(element => {
                        element.classList.remove('fade-in');
                        element.classList.add('fade-out');
                         });
                    
                });
            });
        }
    }

    return(
      <header className="header" id="home" >
        <div className="overlay has-fade"></div>
        <nav className="flex flex-jc-sb flex-ai-c">
            <a className="header__logo"href={"#home"}>
               <img src={logo} alt="logo" />
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
                <a className='mobile-link' href={"#home"}>Home</a>
                <a className='mobile-link' href={"#projects"}>Projects</a>
                <a className='mobile-link' href={"#about"}>About</a>
                <a className='mobile-link' href="https://my.indeed.com/p/tapiwam-g6lrjhh">
                    resume<i className="fas fa-file"/>
                </a>
        </div>
        
      </header>

    )
 };
 
export default Header;