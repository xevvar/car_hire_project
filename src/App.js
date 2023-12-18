import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeroPage from './HeroPage';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar/Navbar"
import { Login } from './Components/Login/Login';
import { Register } from './Components/Login/Register';
import './App.css';
import CarList from './Components/CarList';
import CarDetails from './Components/CarDetails';


import "./App.css"

const App = () => {
  const [setCurrentForm] = useState("login");


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };




  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HeroPage />
          </Route>
          <Route exact path="/login">
            <Login onFormSwitch={toggleForm} />
          </Route>
          <Route exact path="/register">
            <Register onFormSwitch={toggleForm} /></Route>
          <Route exact path="/cars" component={CarList} />
          <Route exact path="/details/:carId" component={CarDetails} />
          <Route exact path="/">
            <Footer />
          </Route>

        </Switch>
      </Router>







    </>

  );
};

export default App;
