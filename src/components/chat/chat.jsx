import React, { Component } from 'react';
import Header from '../header/header';
import Messages from '../messages/messages';
import Submit from '../submit/submit';


class Chat extends Component {
  constructor() {
    super();
    this.state = {
      window: 'OPENED'
    };
  }

  render() {
    return (
      <div className="chat">
        <h1>Chat was loaded!</h1>
        <Header />
        <Messages />
        <Submit />
      </div>
    );
  }
}

export default Chat;