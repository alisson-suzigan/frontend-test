import React from 'react';
import Talk from './talk';
import './_messages.scss';
import { USER_ID } from '../../constants';

function Messages({ messages }) {
  const yourId = USER_ID;

  function scrollToBottom() {
    const el = document.querySelector('.message-list');
    el.scrollTop = el.scrollHeight;
  }

  function renderTalks() {
    let lastId = 0;
    const talks = messages.map((item) => {
      item.class = item.user.id === yourId ? 'right-side' : 'left-side';
      item.usePicture = item.user.id !== lastId;
      lastId = item.user.id;
      return <Talk key={item.id} {...item} />;
    });
    return talks;
  }

  function renderTalkList() {
    const talks = messages ? renderTalks() : null;
    setTimeout(scrollToBottom, 50);
    return talks;
  }

  return (
    <ul className="message-list">
      {renderTalkList()}
    </ul>
  );
}

Messages.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape()).isRequired
};

export default Messages;