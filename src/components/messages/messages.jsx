import React from 'react';
import Talk from './talk';


function Messages({ messages }) {
  function renderTalks() {
    const talks = messages ? messages.map(item => <Talk key={item.id} {...item} />) : null;
    return talks;
  }

  return (
    <ul className="messages">
      {renderTalks()}
    </ul>
  );
}

Messages.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape()).isRequired
};

export default Messages;