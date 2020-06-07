import React from 'react';
import cn from 'classnames';
import CellModel, { CellStatus } from 'models/Cell';

import './styles.scss';

interface CellProps {
  cell: CellModel;
  onReveal: (cell: CellModel) => void;
  onFlag: (cell: CellModel) => void;
}

const Cell: React.FC<CellProps> = ({ cell, onReveal, onFlag }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onReveal(cell);
  };

  const onContextMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onFlag(cell);
  };

  const renderStatus = (cell: CellModel) => {
    switch (cell.status) {
      case CellStatus.Revealed:
        return cell.neighborBombs ? cell.neighborBombs : '';
      case CellStatus.Exploded:
        return '💣';
      case CellStatus.Flagged:
        return '🏁';
    }
  };

  return (
    <button
      className={cn('cell', `cell--${CellStatus[cell.status].toLowerCase()}`)}
      onClick={handleClick}
      onContextMenu={onContextMenu}
    >
      {renderStatus(cell)}
    </button>
  );
};

export default Cell;
