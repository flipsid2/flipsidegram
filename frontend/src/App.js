import React from 'react';
import logo from './logo.svg';
import flipsideStyles from './App.scss';

function App() {
  return (
    <div className={flipsideStyles.App}>
      <header className={flipsideStyles.App__header}>
        <img src={logo} className={flipsideStyles.App__logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={flipsideStyles.App__link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className={flipsideStyles.App__intro}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
