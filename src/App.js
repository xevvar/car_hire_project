import React from 'react';
import './App.css';
import CarList from './Components/CarList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarDetails from './Components/CarDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CarList} />
        <Route path="/details/:carId" component={CarDetails} />
      </Switch>
    </Router>
  );
}

export default App;