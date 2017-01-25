import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/header';
import Messages from '../messages/messages';
import Submit from '../submit/submit';
import { CHAT_HISTORY_PATH, WINDOW } from '../../constants';
import './_chat.scss';


class Chat extends Component {
  constructor() {
    super();
    this.state = { status: null, messages: null, error: null };
    this.windowHandler = this.windowHandler.bind(this);
    this.loadMessages = this.loadMessages.bind(this);
  }

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages() {
    axios.get(CHAT_HISTORY_PATH)
      .then((response) => {
        this.setState({
          status: WINDOW.OPENED,
          messages: response.data.talkMessages
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  // Change window status
  windowHandler(status) {
    this.setState({ status });
  }

  // Renders ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  renderOpened() {
    return (
      <div className="chat">
        <Header {...this.state} windowHandler={this.windowHandler} />
        <Messages {...this.state} />
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