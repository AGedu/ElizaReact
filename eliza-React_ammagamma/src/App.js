import React, {Component} from 'react';
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'
import ElizabotIta from './Eliza';

class App extends Component{
  constructor(props) {
    super(props);
    this.eliza = new ElizabotIta();                                                                                           
    this.state = {
      messages:[{ 
        user: false, 
        text: this.eliza.getLanguageChoisePhrase(), 
        date: new Date(), 
      }],
      first: true,
      language: null
    };
  }

  handleInput = (input) => {
    const messages = this.state.messages.slice(0);
    this.input = input;
    input = input.trim();
    if (!input)
      return;
    if(this.state.language == null){
      if(input === "italiano" || input === "inglese" || input === "italian" || input === "english"){
        messages.push({
          user: true,
          text: input,
          date: new Date()
        });
        this.state.language = input;
      }else{
        messages.push({
          user: true,
          text: input,
          date: new Date()
        });
      }
    }else{
      messages.push({
        user: true,
        text: input,
        date: new Date()
      });
    }  
    this.setState({messages});
    var random = (Math.floor(Math.random() * 5)+1) * 1000;
    setTimeout(this.reply, random);
    
  }

  reply = () => {
    const messages = this.state.messages.slice(0);
    if(this.state.language == null){
      messages.push({
        user: false,
        text: this.eliza.getLanguageChoisePhrase(),
        date: new Date(),
      })
    }
    else if(this.state.first){
      messages.push({
        user: false,
        text: this.eliza.getInitialPhrase(this.state.language),
        date: new Date(),
      })
      this.state.first = false;
    }else{
      messages.push({ 
        user: false, 
        text: this.eliza.calculateResponse(this.input,this.state.language), 
        date: new Date() 
      });
    }  

    this.setState({messages});
  }

  render = () => {
      return(
        <div className="app">
          <div className="header">
            <h3 className="titolo">CHAT WITH ELIZA</h3>
          </div>
          <div className="chat">
            <ChatHistory messages={this.state.messages}/>
            <ChatInput inputHandler={this.handleInput}/>
          </div>
        </div>
      );
    }  
  }  

export default App;