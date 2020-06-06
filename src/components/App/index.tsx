import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Home from '../app-components/Home';
import GameBoard from '../app-components/GameBoard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <GameBoard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
