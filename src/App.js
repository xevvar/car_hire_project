import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroPage from './HeroPage';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar/Navbar"
import { Login  } from './Components/Login/Login';
import {Register} from './Components/Login/Register';
import './App.css';
import CarList from './Components/CarList';
import CarDetails from './Components/CarDetails';


import "./App.css"

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
          <Register onFormSwitch={toggleForm} /></Route>
          <Route path="/cars" component={CarList} /> 
          <Route path="/details/:carId" component={CarDetails} />
        
      </Switch>
    </Router>
    <HeroPage />

    <Footer />
    
    
    
    
    </>
    
  );
};

export default App;
