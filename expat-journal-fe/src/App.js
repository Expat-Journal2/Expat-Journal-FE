import React from 'react';
import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"
import FormValidation from './utils/validation'
import { Route, Switch, Link } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import LoggedOut from "./components/LoggedOut"
import Home from "./components/Home"
import './App.css';
import Dashboard from './components/Dashboard';







function App() {

  return (
    <div className="App">


      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/register"><SignUpForm /></Route>
        <Route exact path="/login"><LoginForm /></Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/loggedout"><LoggedOut /></Route>
      </Switch>

    </div>
  );
}

export default App;