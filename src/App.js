import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../src/Navbar/Navbar"
import { Login  } from './Login/Login';
import {Register} from './Login/Register';
import "./App.css"
import Footer from './Components/Footer.js'; // Adjust the path based on the actual location of your Footer component

const App = () => {
  const [ setCurrentForm] = useState("login");


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };




  return (
    <>
    
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
    <Footer />
    </>
  );
};
export default App;