import React, {Component} from 'react';
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'
import ElizabotIta from './Eliza';
import Language from './Language';

class App extends Component{
  constructor(props) {
    super(props);
    this.eliza = new ElizabotIta();
    this.state = { messages: [{ user: false, text: this.eliza.getInitialPhrase(), date: new Date(), first: false }]};
  }

  handleInput(input){
    this.input = input;
    input = input.trim();
    if (!input)
      return;
    const messages = this.state.messages.slice(0);
    messages.push({
      user: true,
      text: input,
      date: new Date(),
    });
    this.setState({messages});
    setTimeout(this.reply, 1000);
  }

  reply(){
    const unreplied = [];
    const messages = this.state.messages.slice(0);
    let iter = messages.length - 1;

    while(messages[iter].user && iter >= 0){
      unreplied.unshift(messages[iter].text);
      iter--;
    }

    if(unreplied.length === 0)
      return;

    let response = this.eliza.calculateResponse(this.input);
    messages.push({ user: false, text: response, date: new Date() });
    this.setState({messages});
  }

  fixup(text){
    return text.replace(/ \?/g, '?');
  }

  //{this.handleInput} = props   ctrl+k ctrl+c commenta una parte evidenziata
  
  render(){
    if(!this.state.first)
      return(<Language onClick={this.handleClick}></Language>);
    else{
      return(
        <div className="app">
          <div className="header">
            <h3 className="titolo">Chat with Eliza</h3>
          </div>
          <div className="chat">
            <ChatHistory messages={this.state.messages}/>
            <ChatInput inputHandler={this.handleInput}/>
          </div>
        </div>
      );
    }  
  }  
}

export default App;