import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Board from '../app-components/Board';
import Home from '../app-components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
