import React from "react"


export default function Project(props){

    return(
        <div className="project">
            <h3>{props.title}</h3>
            <img  src={props.img} alt="project img" />
            <div>
                <p>{props.description}</p>
               <p>
                <strong> Accomplishments </strong><br/>
                {props.accomplishments}
               </p>
            </div>
         
            <p className="project__link">
                <a href={props.link}>visit site
                <i className="fas fa-external-link-alt"></i>
                </a>
                <a href={props.link}>source code <i className="fab fa-github"></i></a>
            </p>
        </div>

    );
};