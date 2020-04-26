// DEPENDENCY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//COMPONENT IMPORTS
import App from './App';

//STYLING IMPORTS
import './index.css';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
