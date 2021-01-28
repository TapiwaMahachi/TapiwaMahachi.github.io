import React from "react";
import '../css/_about.scss'
import me from '../img/me.png'

export default function About(){
    return(
        <section className="about" id="about" >
            <div><h1 className="about__title" >ABOUT</h1></div>
            <div className="about__cards">
                
                    <h3 className=" about__subtitle">Developer Based in Cape Town</h3>
                   <div className="about__img"><img src={me} alt="profile"/></div>
                   <div className="about__card">
                    <div className="about__intro">
                        <p>
                            I’ve always sought out opportunities and challenges that are
                            meaningful to me. Although my professional path has taken many
                            twists and turns — from waitering to being promoted as manager
                            — I've never stopped engaging in learning, empowering myself
                            and passion to help others and solve problems.
                        </p>
                        <p>
                            As a developer, I enjoy using my attention to detail,
                            my love for making things, and my mission-driven work
                            ethic. That's why I’m excited to make a big impact at a high growth company.
                         </p>
                        
                    </div>
                </div>
                <div className="about__card">
                    <h3 className="about__subtitle"> How i learned</h3> 
                    <p> 
                        <strong>Self taught - </strong>
                        Reverse engeneering , cloning and breaking things apart trying to understand how and why it it works that way
                    </p>
                    <div className="card__content">
                        <p className="education__title "><strong>Education</strong></p>
                        <p>
                            <span className="card-title">
                                <a  className="card__link" href="https://www.unisa.ac.za/sites/corporate/default">
                                    University of South Africa
                                   <i className="fas fa-university"></i>
                                </a>
                            </span>
                        </p>
                        <p >Pretoria, GP</p>
                        <ul >
                            <li>B.S.C in Computing</li>
                            <li>In progress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};