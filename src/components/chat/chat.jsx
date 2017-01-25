import React, { Component } from 'react';
import Header from '../header/header';
import Messages from '../messages/messages';
import Submit from '../submit/submit';
import { WINDOW } from '../../constants';
import './_chat.scss';


class Chat extends Component {
  constructor() {
    super();
    this.state = { status: WINDOW.OPENED };
    this.windowHandler = this.windowHandler.bind(this);
  }

  // Handler
  windowHandler(status) {
    this.setState({ status });
  }

  // Renders
  renderOpened() {
    return (
      <div className="chat">
        <Header {...this.state} windowHandler={this.windowHandler} />
        <Messages />
        <Submit />
      </div>
    );
  }

  renderMinimized() {
    return (
      <div className="chat closed">
        <Header {...this.state} windowHandler={this.windowHandler} />
      </div>
    );
  }

  render() {
    console.log('=== chat status:', this.state.status);
    let chat;
    switch (this.state.status) {
      case WINDOW.OPENED:
        chat = this.renderOpened();
        break;
      case WINDOW.MINIMIZED:
        chat = this.renderMinimized();
        break;
      default:
        chat = null;
    }

    return (
      <div>
        {chat}
      </div>
    );
  }
}

export default Chat;