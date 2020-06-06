import React from 'react';
import { useSelector } from 'react-redux';
import { gameStatus as gameStatusSelector } from '../../../business/Game/selectors';
import GameStatusEnum from '../../../models/GameStatus';
import { Link } from 'react-router-dom';

import './styles.scss';

const GameStatus: React.FC = () => {
  const gameStatus = useSelector(gameStatusSelector);
  return (
    <div className="game-status">
      <p>
        Game Status:{' '}
        {gameStatus === GameStatusEnum.Playing
          ? 'Playing'
          : gameStatus === GameStatusEnum.Won
          ? 'Won'
          : 'Lost'}{' '}
      </p>
      <Link to="/">
        <button>Reset Game</button>
      </Link>
    </div>
  );
};

export default GameStatus;
