import React from 'react';

export default function Footer() {

        const footerStyle = {   
                textAlign: "center",
                background: "#3b8da3",
                color: "#dad6d6",
                padding: "1em",

        }
    
        return(
            <footer style={footerStyle} >
                   
                    <a href="mailto:mahachitapiwa13@gmail.com" 
                       target="_blank" rel="noopener noreferrer">
                          mahachitapiwa13@gmail.com  
                        <i className="fas fa-envelope-square"></i>
                    </a>
                    <ul className="social-list">
                        <li>
                            <a  className="social-link" href="https://github.com/TapiwaMahachi?tab=repositories"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="visually-hidden">Github</span>
                                <i className="fab fa-github"></i>
                            </a>
                        </li> 
                        <li>
                            <a  className="social-link" href="https://linkedin.com/in/tapiwa-mahachi-398749131"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="visually-hidden">LinkedIn</span>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>  
                    </ul>
                    <p className="copyright">Copyright © {new Date().getFullYear()} DevTapiwa.</p>                  
            </footer>
        );
 };

