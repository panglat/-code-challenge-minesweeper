import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import Board from '../app-components/Board';
import { gameSetup } from '../../business/Game/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameSetup({ cols: 3, rows: 4 }));
  });

  return <Board />;
};

export default App;
