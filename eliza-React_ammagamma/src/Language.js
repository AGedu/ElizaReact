import React, { Component } from 'react';
import italianFlag from './italianFlag.jpg'
import britishFlag from './britishFlag.jpg'

class Language extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
        }
    }
    
    
    handleClick(event){
        this.state.value = event.target.id;  
    }
    
    render(){
        return(
            <div>
                <h1 id="title1">CHOOSE LANGUAGE</h1>
                <div>
                    <img src={italianFlag} id="ita" value="ita" onClick={this.handleClick}/>
                    <h3 className="subtitle">ITALIANO</h3>
                </div>
                <div>
                    <img src={britishFlag} id="eng" value="eng" onClick={this.handleClick}/>
                    <h3 className="subtitle">ENGLISH</h3>
                </div>
            </div>
        );
    }

}

export default Language;