import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CarDetails from './Components/CarDetails';
import CarList from './Components/CarList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/details/:carId" component={CarDetails} />
        <Route path="/" component={CarList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
