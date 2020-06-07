import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gameStatus as gameStatusSelector } from 'business/Game/selectors';
import GameStatusEnum from 'models/GameStatus';

import './styles.scss';

const GameStatus: React.FC = () => {
  const gameStatus = useSelector(gameStatusSelector);
  return (
    <div className="game-status">
      <p className="game-status__paragraph">
        <strong>Game Status: </strong>
        {gameStatus === GameStatusEnum.Playing
          ? 'You are Playing'
          : gameStatus === GameStatusEnum.Won
          ? 'You have WON 🥳'
          : 'You have LOST 😢'}
      </p>
      <Link to="/">
        <button className="game-status__button">Reset Game</button>
      </Link>
    </div>
  );
};

export default GameStatus;
