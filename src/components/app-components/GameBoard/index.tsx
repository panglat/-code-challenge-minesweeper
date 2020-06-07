import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Board from '../Board';
import GameStatus from '../GameStatus';
import { gameStatus as gameStatusSelector } from '../../../business/Game/selectors';

import './styles.scss';

const GameBoard: React.FC<RouteComponentProps> = ({ history }) => {
  const gameStatus = useSelector(gameStatusSelector);
  useEffect(() => {
    if (!gameStatus) {
      history.push('/');
    }
  }, [gameStatus, history]);

  return (
    <div className="game-board">
      <h1 className="game-board__header">Minesweeper</h1>
      <Board />
      <GameStatus />
    </div>
  );
};

export default withRouter(GameBoard);
