import React from "react";
import profile from '../img/me.png'

export default function Intro(){
    return(
        <section className="home" id="home">
           
            <div className="intro-card ">
               <div className="intro">
                   <img className="intro-img" src={profile} alt="profile pik"></img>
                   <hr />
                    <h3 className="intro-title">Hi I'm <strong>Tapiwa Mahachi</strong> </h3>
                    <p className="intro-subtitle">I enjoy working with others, coding , collabarating and research</p>
                </div>
            </div>
            <div className="intro-card ">
                <div className="skills">
                    <h3 className="skills-title"> What I Know</h3>
                    <hr />
                    <p><strong>Front-end</strong><br />React, MaterialUi, Javascript</p>
                    <p><strong>Backend</strong><br />Python, Django,SQL,Firebase</p>
                    <p><strong>Other</strong><br />Git & Github - version control,</p>
                    <p>PS: Learning - Nodejs , MongoDb </p>
                </div>
            </div>
           
        </section>
    );
};