import logo from './logo.svg';
import './App.css';
import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <h1>THIS IS A WAY TO USE "class Item"</h1>
      // <small>THIS IS JUST A TEST!</small>
    )
  }
}

function App() {
  return (
    <div className="App">             //STRAIGHT XHTML WITHIN JAVASCRIPT
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <p>
          LIVE CHANGE IN FRONT OF ME
        </p>
        <Item />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// ALLOWS IT TO BE IMPORTABLE!!
export default App;
