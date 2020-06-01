import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { boardSelector } from '../../../business/Game/selectors';
import Cell from '../Cell';

import './styles.scss';
import { RevealCell, FlagCell } from '../../../business/Game/actions';

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const cells = useSelector(boardSelector);

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
                      dispatch(RevealCell(cell));
                    }}
                    onFlag={(cell) => {
                      dispatch(FlagCell(cell));
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
