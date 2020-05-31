import GameOptions from '../models/GameOptions';
import Board from '../models/Board';
import Cell from '../models/Cell';

class MinesweeperController {
  private static calcOneDimensionIndex(
    rows: number,
    row: number,
    col: number
  ): number {
    return row * rows + col;
  }

  private static calcHasBomb(
    bombsIndex: number[],
    rows: number,
    row: number,
    col: number
  ): boolean {
    const index = MinesweeperController.calcOneDimensionIndex(rows, row, col);
    const hasBomb = bombsIndex.includes(index);
    return hasBomb;
  }

  private static calcNeighborBombs(
    bombsIndex: number[],
    rows: number,
    cols: number,
    row: number,
    col: number
  ): number {
    let result = 0;
    for (let r = -1; r <= 1; r++) {
      const calRow = row + r;
      if (calRow >= 0 && calRow < rows) {
        for (let c = -1; c <= 1; c++) {
          const calCol = col + c;
          if (calCol >= 0 && calCol < cols) {
            const hasBomb = MinesweeperController.calcHasBomb(
              bombsIndex,
              calRow,
              rows,
              calCol
            );
            hasBomb && result++;
          }
        }
      }
    }
    return result;
  }

  public static createBoard(gameOptions: GameOptions): Board {
    const { rows, cols, bombs } = gameOptions;
    const maxTileNumber = rows * cols;
    const numOfBombs = Math.min(bombs, maxTileNumber);
    const bombsIndexMapSet = new Set<number>();
    while (bombsIndexMapSet.size < numOfBombs) {
      bombsIndexMapSet.add(Math.floor(maxTileNumber * Math.random()));
    }
    const bombsIndexMap = Array.from(bombsIndexMapSet);
    const cells = new Array<Array<Cell>>();
    for (let r = 0; r < rows; r++) {
      cells[r] = new Array<Cell>();
      for (let c = 0; c < cols; c++) {
        const hasBomb = MinesweeperController.calcHasBomb(
          bombsIndexMap,
          rows,
          r,
          c
        );
        const neighborBombs = MinesweeperController.calcNeighborBombs(
          bombsIndexMap,
          rows,
          cols,
          r,
          c
        );
        cells[r].push({ hasBomb, neighborBombs } as Cell);
      }
    }

    return { cells } as Board;
  }
}

export default MinesweeperController;
