import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat/chat';
import './scss/app.scss';


ReactDOM.render(
  <Chat />,
  document.querySelector('#chat-component')
);