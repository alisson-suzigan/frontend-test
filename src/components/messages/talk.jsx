import React from 'react';


function Talk(props) {
  // console.log('Talk props: ', props);
  function renderPicture() {
    return (
      <div className="talk-image">
        <img src={`/static/images/user-${props.user.id}.jpg`} alt={props.user.name} />
      </div>
    );
  }

  function renderReadStatus() {
    return (
      <div className="read-status">
        {props.message.alreadyRead ? <i className="icon-checked" /> : <i className="icon-clock" />}
      </div>
    );
  }

  function getMessageTime(time) {
    const
      date = new Date(time),
      hours = date.getHours() < 10 ? (`0${date.getHours()}`) : date.getHours(),
      mins = date.getMinutes() < 10 ? (`0${date.getMinutes()}`) : date.getMinutes(),
      messageTime = `Enviado as ${hours}:${mins}`;

    return messageTime;
  }

  return (
    <li className={`message-item ${props.class}`}>
      {props.usePicture ? (renderPicture()) : null}
      <div className="talk-message">
        <div className="arrow" />
        <div className="message">{props.message.message}</div>
        <div className="info">
          <em className="name">{props.user.name}</em>
          {props.company ? <strong className="company">{props.company.name}</strong> : null}
          <small className="time">{getMessageTime(props.message.time)}</small>
        </div>
        {props.class === 'right-side' ? renderReadStatus() : null}
      </div>
    </li>
  );
}

Talk.propTypes = {
  class: React.PropTypes.string.isRequired,
  usePicture: React.PropTypes.bool.isRequired,
  user: React.PropTypes.shape().isRequired,
  message: React.PropTypes.shape().isRequired,
  company: React.PropTypes.shape()
};

Talk.defaultProps = {
  company: {}
};

export default Talk;