import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { gameOptions } from '../../../business/Game/selectors';

const Board: React.FC = () => {
  const gOptions = useSelector(gameOptions);
  return <table className="Board"></table>;
};

export default Board;
