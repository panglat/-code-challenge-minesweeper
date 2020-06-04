import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles.scss';
import Board from '../app-components/Board';
import { CreateGame } from '../../business/Game/actions';
import Home from '../app-components/Home';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CreateGame({ cols: 10, rows: 8, bombs: 5 }));
  });

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
