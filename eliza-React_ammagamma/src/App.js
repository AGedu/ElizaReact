import React, { Component } from 'react';
import ElizaBot from 'elizabot';
import ChatHistory from './ChatHistory'
import ChatInput from './ChatInput'




class App extends Component {
  constructor(props) {
    super(props);
    this.eliza = new ElizaBot();
    this.state = {
      messages: [{
        user: false,
        text: this.fixup(this.eliza.getInitial()),
        date: new Date(),
      }],
    };
    
  }

  handleInput = (input) => {
    input = input.trim();
    if (!input)
      return;
    const messages = this.state.messages.slice(0);
    messages.push({
      user: true,
      text: input,
      date: new Date(),
    });
    this.setState({
      messages,
    });
    setTimeout(this.reply,1000);

  }

  reply = () => {
    const unreplied = [];
    const messages = this.state.messages.slice(0);
    let iter = messages.length - 1;
    while (messages[iter].user && iter >= 0) {
      unreplied.unshift(messages[iter].text);
      iter--;
    }
    if (unreplied.length === 0)
      return;
    let response = this.eliza.transform(unreplied.join(' '));
    messages.push({
      user: false,
      text: this.fixup(response),
      date: new Date(),
    });
    this.setState({
      messages,
    });
  }

  fixup(text) {
    return text.replace(/ \?/g, '?');
  }
  //{this.handleInput} = props   ctrl+k ctrl+c commenta una parte evidenziata
  render() {
    return (
      <div className="app">
        <div className='header'>
          <h3 className='titolo'>Chat with Eliza</h3>
        </div>
        <div className="chat">
          <ChatHistory messages={this.state.messages} />
          <ChatInput inputHandler={this.handleInput} />
        </div>
      </div>
    );
  }
}

export default App;
