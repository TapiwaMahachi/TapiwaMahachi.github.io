import React from "react";

export default function Intro(){
    return(
        <div className="container">
            <div className="intro-card ">
                <div className="intro">
                    <img className="intro-img" src="./me.png" alt="profile pik"></img>
                    <hr />
                    <h2 className="intro-title">Hi I'm <strong>Tapiwa Mahachi</strong> </h2>
                    <p className="intro-subtitle">I enjoy working with others, coding , collabarating and research</p>
                </div>
            </div>
            <div className="intro-card ">
                <div className="skills">
                    <h2 className="skills-title"> What I Know</h2>
                    <hr />
                    <p><strong>Front-end</strong><br />React, MaterialUi, Javascript</p>
                    <p><strong>Backend</strong><br />Python, Django,SQL,Firebase</p>
                    <p><strong>Other</strong><br />Git & Github - version control,</p>
                    <p>PS: Learning - Nodejs , MongoDb </p>
                </div>
            </div>
        </div>
    );
};