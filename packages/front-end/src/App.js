import React from 'react';
import { Example, LoadingButton } from '@fin/ui-components';
import shared from '@fin/shared';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoadingButton>Hello World! with {shared}</LoadingButton>
        <Example />
      </header>
    </div>
  );
}

export default App;
