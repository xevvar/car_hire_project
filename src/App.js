import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './Hero';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar/Navbar"
import { Login  } from './Components/Login/Login';
import {Register} from './Components/Login/Register';
import CarsList from './Components/CarsList';

import "./App.css"

const App = () => {
  const [ setCurrentForm] = useState("login");
  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  

  
  return (
    <>
    <Hero />
    <Router>
      <Navbar />
      <Switch>
        
        <Route path="/login">
          <Login onFormSwitch={toggleForm} />
        </Route>
        <Route path="/register">
          <Register onFormSwitch={toggleForm} /></Route>
          <Route path="/cars" component={CarsList} /> 
        
      </Switch>
    </Router>

    <Footer />
    
    
    
    
    </>
    
  );
};
export default App;
