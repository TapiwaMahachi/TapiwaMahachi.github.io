import React from "react";

export default function About(){
    return(
        <section className="about" id="about">
            <h2 className="about-title">ABOUT</h2>
            <div className="about-cards">
               
                <div className="about-card">
                    <h3 className=" about-subtitle">Developer Based in Cape Town</h3>
                    <div className="about-intro">
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
                        <p>
                            <strong>Current Focus</strong>:&nbsp;<a aria-label="Navigate to the Full Stack React homepage"
                                    href="https://www.fullstackreact.com/">React</a>&nbsp;//&nbsp;<a
                                        aria-label='Navigate to the article "Scalable CSS"'
                                        href="https://mrmrs.github.io/writing/2016/03/24/scalable-css/">Design Systems</a>
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <h2> How i learned</h2> 
                    <hr></hr>
                    <p> 
                        <strong>Self taught - </strong>
                        Reverse engeneering , cloning and breaking things apart trying to understand how and why it it works that way
                    </p>
                    <div className="card-content">
                        <p className="education-title "><strong>Education</strong></p>
                        <p>
                            <span className="card-title">
                                <a href="https://www.unisa.ac.za/sites/corporate/default">
                                    University of South Africa
                                   <i class="fas fa-university"></i>
                                </a>
                            </span>
                        </p>
                        <p className="brown-text">Pretoria, GP</p>
                        <ul>
                            <li>B.S.C in Computing</li>
                            <li>In progress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};