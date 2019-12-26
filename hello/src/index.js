import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const formatName = user => user.firstName + '' +user.lastName;

function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  
const user = {
    firstName : 'j',
    lastName : 'u'
}

const el = (
    <div>
        <h1>hello, {formatName(user)}!</h1>
        <div>같은레벨의 요소가 없어야한다. </div>
    </div>
);

// ReactDOM.render(el, document.getElementById('root'));
ReactDOM.render(getGreeting(user), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
