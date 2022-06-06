import React, { Component } from 'react';

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
                <h1>CHOOSE LANGUAGE</h1>
                <div>
                    <img src={"italianFlag.jpg"} id="ita" value="ita" onClick={this.handleClick}/>
                    <h3>ITALIANO</h3>
                </div>
                <div>
                    <img src={"britishFlag.jpg"} id="eng" value="eng" onClick={this.handleClick}/>
                    <h3>ENGLISH</h3>
                </div>
            </div>    
        ); 
    }

}

export default Language;