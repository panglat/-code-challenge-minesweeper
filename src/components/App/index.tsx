import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import GameSetup from '../app-components/GameSetup';
import GameBoard from '../app-components/GameBoard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <GameBoard />
        </Route>
        <Route path="/">
          <GameSetup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
