import React from "react";
import pp from "../img/Tapiwa.jpg";
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
            <div className="intro__img">
                <img src={pp} alt="pp-img"/>
            </div>
         
        </section>
    );
};