import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            url: '#'
        }
        this.opeMenu = this.openMenu.bind(this)
    };
    
    openMenu(){

      const  navToggle = document.querySelector('.nav-toggle');
      navToggle.addEventListener('click', ()=>{
          document.body.classList.toggle('nav-open');
      })
       
    }

    render(){
        return(
            <div className="header">
                        <a className="logo"href={this.url}>
                            <span className="logo-btn">DevTapiwa</span>
                        </a>
                        <nav >
                            <ul className="nav-list">
                                    <li><a className="nav-link" href={this.state.url}>Home</a></li>
                                    <li><a className="nav-link" href={this.state.url}>Projects</a></li>
                                    <li><a className="nav-link" href={this.state.url}>About</a></li>
                            </ul>
                        </nav>

                        <button className="contact-btn"> contact  me</button>

                        <button  onClick={this.openMenu} className="nav-toggle" aria-label="toggle-navigation" >
                            <span  className="hamburger"></span>
                        </button>
        
            </div>
        )
    }
}

export default Header;