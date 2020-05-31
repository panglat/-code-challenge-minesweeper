import React from 'react';
import './styles.scss';
import CellModel from '../../../models/Cell';

interface CellProps {
  cell: CellModel;
}

const Cell: React.FC<CellProps> = ({ cell }) => (
  <>{cell.hasBomb ? '*' : cell.neighborBombs}</>
);

export default Cell;
