export enum CellStatus {
  Uncovered,
  Flagged,
  Exploded,
}

interface Cell {
  hasBomb: boolean;
  neighborBombs: number;
}

export default Cell;
