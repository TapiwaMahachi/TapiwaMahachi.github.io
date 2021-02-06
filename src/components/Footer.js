import React from 'react';
import '../css/_footer.scss';
import github from '../img/github.svg';
import linkdin from '../img/icons8-linkedin.svg';

export default function Footer() {
        return(
            <footer className="footer">
                <div className="footer__social">
                     <a href="mailto:mahachitapiwa13@gmail.com" 
                       target="_blank" rel="noopener noreferrer">
                         <p>mahachitapiwa13@gmail.com</p> 
                         <i className="fas fa-envelope-square"></i>
                    </a>
                    <ul className="social__list">
                        <li>
                            <a  className="social__link" href="https://github.com/TapiwaMahachi?tab=repositories"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="visually-hidden">Github</span>
                                <img src={github} alt="github"></img>
                            </a>
                        </li> 
                        <li>
                            <a  className="social__link" href="https://linkedin.com/in/tapiwa-mahachi-398749131"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="visually-hidden">LinkedIn</span>
                                <img src={linkdin} alt="Linkedin"/>
                            </a>
                        </li>  
                    </ul>
                </div>
                <div className="footer__copyright">
                     <p className="copyright">Copyright © {new Date().getFullYear()} DevT.</p>
                </div>                  
            </footer>
        );
 };


