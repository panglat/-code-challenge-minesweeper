import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { boardSelector } from '../../../business/Game/selectors';
import Cell from '../Cell';
import { gameStatus as gameStatusSelector } from '../../../business/Game/selectors';
import { RevealCell, FlagCell } from '../../../business/Game/actions';
import GameStatusEnum from '../../../models/GameStatus';

import './styles.scss';

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const cells = useSelector(boardSelector);
  const gameStatus = useSelector(gameStatusSelector);

  if (cells) {
    return (
      <table className="Board">
        <tbody>
          {cells.map((row, rIndex) => (
            <tr key={`row${rIndex}`}>
              {row.map((cell, cIndex) => (
                <td key={`row${rIndex}-cell${cIndex}`}>
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
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return null;
};

export default Board;
