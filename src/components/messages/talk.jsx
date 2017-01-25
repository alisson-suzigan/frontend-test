import React from 'react';


function Talk(props) {
  // console.log('Talk props: ', props);
  return (
    <li>
      <div className="talk-image">{props.id}:</div>
      <div className="talk-message">
        <div className="info">info</div>
        <div className="message">{props.message.message}</div>
      </div>
    </li>
  );
}

Talk.propTypes = {
  id: React.PropTypes.number.isRequired,
  message: React.PropTypes.shape().isRequired
};

export default Talk;