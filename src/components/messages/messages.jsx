import React from 'react';
import Talk from './talk';
import './_messages.scss';
import { USER_ID } from '../../constants';

function Messages({ message }) {
  const yourId = USER_ID;

  function scrollToBottom() {
    const el = document.querySelector('.message-list');
    el.scrollTop = el.scrollHeight;
  }

  function renderTalks() {
    let lastId = 0;
    const talks = message.map((item) => {
      item.class = item.user.id === yourId ? 'right-side' : 'left-side';
      item.usePicture = item.user.id !== lastId;
      lastId = item.user.id;
      return <Talk key={item.id} {...item} />;
    });
    return talks;
  }

  function renderTalkList() {
    const talks = message ? renderTalks() : null;
    setTimeout(scrollToBottom, 50);
    return talks;
  }

  return (
    <div className="message-wrap">
      <ul className="message-list">
        {renderTalkList()}
      </ul>
    </div>
  );
}

Messages.propTypes = {
  message: React.PropTypes.arrayOf(React.PropTypes.shape()).isRequired
};

export default Messages;