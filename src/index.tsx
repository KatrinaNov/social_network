import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "It's my first post", likesCount: 12},
  {id: 2, message: "Hi! I'm learning React",  likesCount: 12},
]
let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Maksim'},
  {id: 3, name: 'Kate'},
  {id: 4, name: 'Vanya'},
  {id: 5, name: 'Andrew'},
]
let messages = [
  {id: 1, message: "Hello my friend!"},
  {id: 2, message: "What's up? Can you help me?"},
  {id: 3, message: 'Yup!'},
  {id: 4, message: "Cool!"},
  {id: 5, message: 'Andrew'},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
