import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import Board from '../app-components/Board';
import { gameCreate } from '../../business/Game/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameCreate({ cols: 10, rows: 8, bombs: 5 }));
  });

  return <Board />;
};

export default App;
