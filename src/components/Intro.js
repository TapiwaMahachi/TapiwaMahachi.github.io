import React from "react";
import '../css/_intro.scss'

export default function Intro(){
    return(
        <section className="intro">
           <div className="intro__card">
             <div className="intro__title">
                   {/* <img className="intro-img" src={profile} alt="profile pik"></img> */}
                   
                    <h2>Hi I'm <strong>Tapiwa Mahachi</strong> </h2>
                    <p>I enjoy working with others, coding , collabarating and research</p>
            </div>
            {/* <div className="intro__img"></div> */}
            <div className="intro__skills">
                <div className="info">
                     <h2> What I Know</h2>
                <p><strong>Front-end</strong><br />React, MaterialUi, Javascript</p>
                <p><strong>Backend</strong><br />Python, Django,SQL,Firebase</p>
                <p><strong>Other</strong><br />Git & Github - version control,</p>
                <p>PS: Learning - Nodejs , MongoDb </p>
                </div>
               
            </div>
           </div>
        </section>
    );
};