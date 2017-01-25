import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/header';
import Messages from '../messages/messages';
import Submiter from '../submiter/submiter';
import { CHAT_HISTORY_PATH, WINDOW } from '../../constants';
import './_chat.scss';


class Chat extends Component {
  constructor() {
    super();
    this.state = { status: null, message: null, error: null };
    this.loadMessages = this.loadMessages.bind(this);
    this.windowHandler = this.windowHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
  }

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages() {
    axios.get(CHAT_HISTORY_PATH)
      .then((response) => {
        this.setState({
          status: WINDOW.OPENED,
          message: response.data.talkMessages
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

  messageHandler(data) {
    const messages = this.state.message;
    data.id = messages[messages.length - 1].id + 1;
    messages.push(data);
    this.setState({ message: messages });
  }

  // Renders ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  renderOpened() {
    return (
      <div className="chat">
        <Header {...this.state} windowHandler={this.windowHandler} />
        <Messages {...this.state} />
        <Submiter messageHandler={this.messageHandler} />
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