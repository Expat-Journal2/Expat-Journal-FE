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
      <h1>Foreigner Files</h1>
      <h2>The place for you to show off where you've been and what you've done!</h2>
      <Link to="/register"><button>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>

      <Switch>
      <Route exact path="/register"><SignUpForm /></Route>
      <Route exact path="/login"><LoginForm /></Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
