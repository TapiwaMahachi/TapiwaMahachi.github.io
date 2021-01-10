import React from 'react';

export default function Footer() {

        const footer = {   
                textAlign: "center",
                background: "#3b8da3",
                color: "#dad6d6",
                padding: "0",

        }
        const copyright ={
            backgroundColor: "rgba(39, 38, 38)",
            marginBottom: "1em",
            padding: '.5em',
        }
       
        return(
            <footer style={footer} >
                <div className="footer-social">
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
                </div>
                <div className="footer-copyright" style={copyright}>
                     <p className="copyright">Copyright © {new Date().getFullYear()} DevTapiwa.</p>
                </div>                  
            </footer>
        );
 };


