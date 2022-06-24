import React, {Component} from 'react';

class ChatMessage extends Component{
  render = () => {
    const message = this.props.message;
    let author = 'ELIZA';
    let id = 'eliza';
    if(message.user){
      author = 'Me';
      id = 'user';
    }

    return(
      <div id={id}>
          <div id='dati'>
            <h3>
              {author} 
              <span id='data'>Today at {message.date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})}</span>
            </h3>
          </div>
          <p>{message.text}</p>
      </div>
    );
  }
}

export default ChatMessage;