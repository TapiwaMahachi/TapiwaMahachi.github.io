import React from 'react';
import ReactDOM from 'react-dom';



class Footer extends React.Component{
    constructor(props){
        super(props)
            this.url = '#'; 
    }
    render(){
        return(
            <div>
                    <a href="mailto:mahachitapiwa13@gmail.com">mahachitapiwa13@gmail.com</a>
                    <ul className="social-list">
                        <li><a className="social-link" href={this.url}>Github</a></li>
                        <li><a className="social-link" href={this.url}>LinkedIn</a></li>
                    </ul>
                    <p className="copyright">Copyright © 2020 DevTapiwa.</p>                  
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>,
    document.getElementById('footer')
);