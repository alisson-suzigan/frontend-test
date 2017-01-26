import React from 'react';
import './_header.scss';
import { WINDOW } from '../../constants';


function Header({ status, windowHandler }) {
  function onResizeClick(event) {
    const action = event.currentTarget.getAttribute('data-action') === 'resize' ? WINDOW.OPENED : WINDOW.MINIMIZED;
    windowHandler(action);
  }

  function onCloseClick() {
    windowHandler(WINDOW.CLOSED);
  }

  function renderMinimizeButton() {
    return (
      <button data-action="minimize" className="btn" title="Minimizar" onClick={onResizeClick}>
        <i className="icon-minimize" />
      </button>
    );
  }

  function renderResizeButton() {
    return (
      <button data-action="resize" className="btn" title="Restaurar" onClick={onResizeClick}>
        <i className="icon-resize" />
      </button>
    );
  }

  return (
    <header className="header">
      <strong className="title">Vaga: Desenvolvedor Front-end</strong>
      <div className="actions">
        {status === WINDOW.OPENED ? renderMinimizeButton() : renderResizeButton()}
        <button data-action="close" className="btn close" title="Fechar" onClick={onCloseClick}>
          <i className="icon-close" />
        </button>
      </div>
    </header>
  );
}

// Props
Header.propTypes = {
  status: React.PropTypes.string.isRequired,
  windowHandler: React.PropTypes.func.isRequired
};

export default Header;