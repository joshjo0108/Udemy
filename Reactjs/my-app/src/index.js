import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    // IT'S SAME AS App.js
import reportWebVitals from './reportWebVitals';

// JSX SYNTAX:  CLASS.METHOD(FIRST PARAMETER, SECOND PARAMETER)

ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
