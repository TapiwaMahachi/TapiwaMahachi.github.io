import React from 'react';
import logo from '../img/portfolio-loggo.png'

import '../css/_header.scss';
import { NavLink } from 'react-router-dom';



function Header(){
        /*
          #animating the hamburger and overlay menu
        */
    const toggle =()=>{
        const header = document.querySelector('.header');
        const fadElement = document.querySelectorAll('.has-fade');
        const body = document.querySelector('body');
        const mobile = document.querySelectorAll('.mobile-link');
        
        /* 
            #checking if menu is open
            #removing the overlay, noscroll
        */
        if(header.classList.contains('nav-open')){
            body.classList.remove('noscroll');
            header.classList.remove('nav-open');
            fadElement.forEach(element => {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }else{
            /*
             #adding the class to animate the hamburger
             #showing the overlay
             #disabling scrolling
            */
            body.classList.add('noscroll');
            header.classList.add('nav-open');
            fadElement.forEach(element=>{
                element.classList.remove('fade-out')
                element.classList.add('fade-in')
            });
            /*
             #closing the mobile menu when link is clicked
             #removing noscroll
             #removing the overlay
            */
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
      <header className="header" id="#home" >
        <div className="overlay has-fade"></div>
        <nav className="flex flex-jc-sb flex-ai-c">
            <div className="header__logo">
                <NavLink 
                    activeClassName="is-active"
                    to="/home"   
                >
                <img className="imge" src={logo} alt="logo" />
                </NavLink>
            </div>
           {/* 
                Hamburger Menu 
           */}
            <button 
                className="header__nav-toggle hide-for-desktop" 
                aria-label="toggle navigation" 
                onClick={toggle}
            >
              <span  className="header__hamburger"></span>
            </button>
            {/* 
                Desktop menu
            */}
            <div className="header__links flex hide-for-mobile">
             <div className="link">
                <NavLink  
                    activeClassName="is-active"
                    to="/" 
                    exact    
                >
                    <span>Home</span>
                </NavLink>
            </div> 
               
                 <div className="link">
                    <NavLink 
                        activeClassName="is-active"
                        to="/projects" 
                        exact  
                  >
                     <span>Projects</span>
                 </NavLink>
                </div>
                
                {/* <div className="link">
                <NavLink
                    activeClassName="is-active"
                    to= "/about"
                >
                    <span>About</span>
                </NavLink>
            </div> */}
                
                  <div className="link">
                    <NavLink 
                        activeClassName="is-active"
                        to="https://my.indeed.com/p/tapiwam-g6lrjhh"
                    >
                        <span>Resume</span>
                        <i className="fas fa-file"/>
                    </NavLink>
                </div>
                
            </div>
        </nav>
        {/*
          Mobile Menu
        */}
         <div className="header__menu has-fade">
                <NavLink className='mobile-link' to="/" >Home</NavLink>
                <NavLink className='mobile-link' to="/projects">Projects</NavLink>
            {/* <NavLink className='mobile-link' to="/about">About</NavLink> */}
                <NavLink className='mobile-link' to="https://my.indeed.com/p/tapiwam-g6lrjhh">
                    resume<i className="fas fa-file"/>
                </NavLink>
        </div>
        
      </header>

    )
 };
 
export default Header;