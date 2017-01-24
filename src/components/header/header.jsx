import React from 'react';
import './_header.scss';


function Header() {
  return (
    <header className="header">
      <strong className="title">Vaga: Desenvolvedor Front-end</strong>
      <div className="actions">
        <button className="btn resize" title="Minimizar">o<i className="icon" /></button>
        <button className="btn close" title="Fechar">x<i className="icon" /></button>
      </div>
    </header>
  );
}

export default Header;