import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { gameStatus as gameStatusSelector } from '../../../business/Game/selectors';
import GameStatusEnum from '../../../models/GameStatus';

const GameStatus: React.FC = () => {
  const gameStatus = useSelector(gameStatusSelector);
  return (
    <div className="game-status">
      <span>
        Game Status:{' '}
        {gameStatus === GameStatusEnum.Playing
          ? 'Playing'
          : gameStatus === GameStatusEnum.Won
          ? 'Won'
          : 'Lost'}{' '}
      </span>
    </div>
  );
};

export default GameStatus;
