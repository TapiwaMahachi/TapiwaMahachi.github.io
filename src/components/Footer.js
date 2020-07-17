import React from 'react';

export default function Footer() {
    
        return(
            <footer>
                    <a href="mailto:mahachitapiwa13@gmail.com">
                          mahachitapiwa13@gmail.com
                        <i class="fas fa-envelope-square"></i>
                    </a>
                    <ul className="social-list">
                        <li>
                        <a className="social-link" href="https://github.com/TapiwaMahachi/myportfolio" >
                            <span className="visually-hidden">Github</span>
                            <i class="fab fa-github"></i>
                            </a>
                        </li> 
                        <li>
                        <a className="social-link" href="https://linkedin.com/in/tapiwa-mahachi-398749131" >
                            <span className="visually-hidden">LinkedIn</span>
                            <i class="fab fa-linkedin"></i>
                            </a>
                        </li>  
                    </ul>
                    <p className="copyright">Copyright © 2020 DevTapiwa.</p>                  
            </footer>
        );
 };


