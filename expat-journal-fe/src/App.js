import React from 'react';
import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"
import FormValidation from './utils/validation'
import {Route, Switch, Link} from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"

import './App.css';
import Dashboard from './components/Dashboard';






function App() {



  return (
    <div className="App">
      <h1>Expat-Journal-2</h1>
      <h2>This is a temporary Home Page Component</h2>
      <Switch>
      <Route exact path="/register"><SignUpForm /></Route>
      <Route exact path="/login"><LoginForm /></Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
