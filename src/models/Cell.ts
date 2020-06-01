export enum CellStatus {
  Covered,
  Revealed,
  Flagged,
  Exploded,
}

interface Cell {
  row: number;
  col: number;
  hasBomb: boolean;
  neighborBombs: number;
  status: CellStatus;
}

export default Cell;
