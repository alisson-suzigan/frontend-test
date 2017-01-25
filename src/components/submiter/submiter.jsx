import React, { Component } from 'react';
import './_submiter.scss';
import { USER_ID } from '../../constants';


class Submiter extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      showActions: false
    };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleMessage(event) {
    const text = event.target.value;
    this.setState({
      message: text,
      showActions: text !== ''
    });
  }

  handleSubmit() {
    const data = {
      user: {
        id: USER_ID,
        perfilId: 1,
        name: 'Nome do Candidato'
      },
      message: {
        time: new Date().getTime(),
        alreadyRead: false,
        message: this.state.message
      }
    };
    this.props.messageHandler(data);
    this.handleClear();
  }

  handleClear() {
    const textarea = document.querySelector('#chat-text-message');
    textarea.value = '';
    this.setState({
      message: '',
      showActions: false
    });
  }

  renderActions() {
    return (
      <div className="submit-actions">
        <button
          id="chat-submit-message"
          className="btn submit"
          data-action="submit"
          title="Enviar mensagem"
          onClick={this.handleSubmit}
        >
          ^<i className="icon" />
        </button>

        <button
          id="chat-clear-message"
          className="btn clear"
          data-action="clear"
          title="Limpar mensagem"
          onClick={this.handleClear}
        >
          X<i className="icon" />
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="submiter">
        <textarea
          id="chat-text-message"
          placeholder="Digite aqui sua mensagem..."
          value={this.state.value}
          onChange={this.handleMessage}
        />
        {this.state.showActions ? this.renderActions() : null}
      </div>
    );
  }
}

Submiter.propTypes = {
  messageHandler: React.PropTypes.func.isRequired
};

export default Submiter;