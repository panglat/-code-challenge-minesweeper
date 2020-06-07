import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { boardSelector } from 'business/Game/selectors';
import Cell from 'components/app-components/Cell';
import { gameStatus as gameStatusSelector } from 'business/Game/selectors';
import { RevealCell, FlagCell } from 'business/Game/actions';
import GameStatusEnum from 'models/GameStatus';

import './styles.scss';

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const cells = useSelector(boardSelector);
  const gameStatus = useSelector(gameStatusSelector);

  if (cells) {
    return (
      <div className="board">
        {cells.map((row, rIndex) => (
          <div className="board__row" key={`row${rIndex}`}>
            {row.map((cell, cIndex) => (
              <div className="board__cell" key={`row${rIndex}-cell${cIndex}`}>
                <Cell
                  cell={cell}
                  onReveal={(cell) => {
                    if (gameStatus === GameStatusEnum.Playing) {
                      dispatch(RevealCell(cell));
                    }
                  }}
                  onFlag={(cell) => {
                    if (gameStatus === GameStatusEnum.Playing) {
                      dispatch(FlagCell(cell));
                    }
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default Board;
