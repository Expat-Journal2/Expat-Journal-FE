import React from 'react';
import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"
import FormValidation from './utils/validation'

import './App.css';






function App() {

  return (
    <div className="App">
      <h1>Expat-Journal-2</h1>
      <h2>This is a temporary Home Page Component</h2>
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default App;
