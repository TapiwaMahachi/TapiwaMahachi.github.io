import React from "react"


export default function Project(props){

    return(
        
         <div className="project">
                <h3 className="project__title">{props.title}</h3>
                <img  className="project__img" src={props.img} alt="project img" />
                <div>
                <div className="project__tech">
                    <p>{props.accomplishments}</p>
                </div>
                </div>
            
                <p className="project__link">
                    <a 
                        href={props.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >visit site
                    <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a 
                        href={props.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >source code <i className="fab fa-github"></i></a>
                </p>
        </div>
        
        

    );
};