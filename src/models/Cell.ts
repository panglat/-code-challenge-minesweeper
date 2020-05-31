export enum CellStatus {
  Uncovered,
  Flagged,
  Exploded,
}

interface Cell {
  hasBomb: boolean;
}

export default Cell;
