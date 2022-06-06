import React, {Component} from 'react';
import italianFlag from './italianFlag.jpg'
import britishFlag from './britishFlag.jpg'

class Language extends React.Component{
    constructor(props){
        super(props);
        this.state = { language: "NULL" };
    }
    
    handleClick(event){
        this.setState({ language : event.target.id });
    }
    
    render(){
        return(
            <div>
                <h1 id="title">CHOOSE LANGUAGE</h1>
                <div id="boxITA">
                    <img src={italianFlag} alt="italianFlag" className="flag" id="ITA" onClick={this.handleClick}/>
                    <h3 className="subtitle">ITALIANO</h3>
                </div>

                <div id="boxENG">
                    <img src={britishFlag} alt="britishFlag" className="flag" id="ENG" onClick={this.handleClick}/>
                    <h3 className="subtitle">ENGLISH</h3>
                </div>
            </div>
        );
    }
}

export default Language;