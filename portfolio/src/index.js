import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import App from './App';
import { BrowserRouter as R } from 'react-router-dom'

ReactDOM.render(<R><App /></R>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://
