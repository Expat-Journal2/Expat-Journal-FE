// dependency imports
import React from 'react'
import { Route, Switch, Link } from "react-router-dom"
// util imports
import FormValidation from './utils/validation'

// component imports
import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"
import PrivateRoute from "./components/PrivateRoute"
import LoggedOut from "./components/LoggedOut"
import Home from "./components/Home"
import Dashboard from './components/Dashboard'
import HeaderBar from "./components/HeaderBar"
import AllPosts from './components/AllPosts'
import AddPost from './components/AddPost'

// styling imports
import './App.css';

function App() {
    return (
        <div className="App">
            <HeaderBar />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/register"><SignUpForm /></Route>
              <Route exact path="/login"><LoginForm /></Route>
              <Route exact path="/allposts"><AllPosts /></Route>
              <Route exact path="/addpost"><AddPost /></Route>        
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="/loggedout"><LoggedOut /></Route>
            </Switch>
        </div>
    );
}

export default App;