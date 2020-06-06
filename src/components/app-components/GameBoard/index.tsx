import React from 'react';
import './styles.scss';
import Board from '../Board';
import GameStatus from '../GameStatus';

function GameBoard() {
  return (
    <div className="game-board">
      <Board />
      <GameStatus />
    </div>
  );
}

export default GameBoard;
