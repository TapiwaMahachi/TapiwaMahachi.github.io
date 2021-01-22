import React from "react";
import '../css/_intro.scss'


export default function Intro(){
    return(
        <section className="intro">
            <div className= "intro__animation" id="animation">
                <div className="red slash">/</div>
                <div className="white bold mask">
                    <div className="text text-1">Hi</div>
                </div>
                <div className="white bold mask">
                    <div className="text text-2">I'am</div>
                </div>
            </div>
             <div id="animation-5" className="intro__animation">      
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                    <clipPath id="mask-bottom-right">
                    <rect className="clip-path" x="70%" y="0" width="30%" height="100%"/>
                    </clipPath>
                    <clipPath id="mask-top">
                    <rect className="clip-path" x="0" y="0" width="100%" height="100%"/>
                    </clipPath>
                    <clipPath id="mask-bottom-left">
                    <rect className="clip-path" x="0" y="0" width="30%" height="100%"/>
                    </clipPath>
                </defs>
                
                <line className="bottom-right" x1="70%" y1="100%" x2="100%" y2="100%"/>
                <line className="right" x1="100%" y1="0" x2="100%" y2="100%"/>
                <line className="top" x1="0" y1="0" x2="100%" y2="0"/>
                <line className="left" x1="0" y1="0" x2="0" y2="100%"/>
                <line className="bottom-left" x1="0" y1="100%" x2="30%" y2="100%"/>
                </svg>
                <div className="white bold  mask">
                <div>Tapiwa Mahachi</div>
                </div>
                <div className="white mask">
                <div>Frontend Dev</div>
                </div>
             </div> 
             <div className= "intro__animation" id="animation-3"> 
                <div className="white light mask">
                    <div className="passion left">I love coding </div>
                </div>
                <div className="white light mask">
                    <div className="passion right">collaborating & research</div>
                </div>
            </div>
             {/* Code from codepen */}
    
        {/* <div className="intro__card">
            <div className="intro__title">
            
                <h2>Hi I'm <strong>Tapiwa Mahachi</strong> </h2>
                <p>I enjoy working with others, coding , collabarating and research</p>
        </div>
        
        <div className="intro__skills">
            <div className="info">
                    <h2> What I Know</h2>
            <p><strong>Front-end</strong><br />React, MaterialUi, Javascript</p>
            <p><strong>Backend</strong><br />Python, Django,SQL,Firebase</p>
            <p><strong>Other</strong><br />Git & Github - version control,</p>
            <p>PS: Learning - Nodejs , MongoDb </p>
            </div>
            
        </div>
        </div> */}
        </section>
    );
};