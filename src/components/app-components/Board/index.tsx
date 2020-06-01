import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { boardSelector } from '../../../business/Game/selectors';
import Cell from '../Cell';

const Board: React.FC = () => {
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
                    onReveal={(cell) => {}}
                    onFlag={(cell) => {}}
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
