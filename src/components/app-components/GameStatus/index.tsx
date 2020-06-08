import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { gameStatus as gameStatusSelector } from 'business/Game/selectors';
import GameStatusEnum from 'models/GameStatus';
import { ResetGame } from 'business/Game/actions';

import './styles.scss';

const GameStatus: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(gameStatusSelector);

  const handleOnClick = () => {
    dispatch(ResetGame());
    history.push('/');
  };

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
      <button className="game-status__button" onClick={handleOnClick}>
        Reset Game
      </button>
    </div>
  );
};

export default withRouter(GameStatus);
