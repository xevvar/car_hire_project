import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../src/Navbar/Navbar"
import { Login  } from './Login/Login';
import {Register} from './Login/Register';
import "./App.css"

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // You may want to verify the token with the backend
      setIsLoggedIn(true);
    }
  }, []);
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
};
export default App;