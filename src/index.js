import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";



let dialogs = [
    {id: 1, name: "Paul"},
    {id: 2,name: "Den"},
    {id: 3,name: "Petr"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Kate"},
    {id: 6, name: "July"}
];

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Norm"},
    {id: 5, message: "Yo-yo"}
];

let posts = [
    {id: 1, message: "Privet volchara", likesCount: 10} ,
    {id: 2, message: "Нормально ты заряжаешь", likesCount: 3},
    {id: 3, message: "Прокинул через пропсы", likesCount: 7}
];


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App dialogs={dialogs} messages={messages} posts={posts} />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
