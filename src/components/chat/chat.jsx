import React, { Component } from 'react';
import Header from '../header/header';
import Messages from '../messages/messages';
import Submit from '../submit/submit';
import './_chat.scss';


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
        <Header />
        <Messages />
        <Submit />
      </div>
    );
  }
}

export default Chat;