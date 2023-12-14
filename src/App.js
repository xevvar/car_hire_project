import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../src/Navbar/Navbar"
import { Login  } from './Login/Login';
import {Register} from './Login/Register';
import "./App.css"

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login onFormSwitch={toggleForm} />
        </Route>
        <Route path="/register">
          <Register onFormSwitch={toggleForm} />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;