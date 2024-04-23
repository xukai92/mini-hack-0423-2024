import React from 'react';
import logo from './logo.svg';
import './App.css';
import { drawFromUniform, drawFromNormal } from './probWeb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world!</p>
        <p style={{ fontSize: drawFromUniform(10, 20) }}>This is a paragraph with random font size between 10 and 20.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ backgroundColor: "#ccc", padding: drawFromNormal(10, 2), border: "1px solid red" }}>
          This is a div with a light gray background, random padding following Normal(10, 2), and a red border.
        </div>
      </header>
    </div>
  );
}

export default App;
