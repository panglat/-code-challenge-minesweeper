import GameOptions from '../models/GameOptions';
import Board from '../models/Board';
import Cell from '../models/Cell';

class MinesweeperController {
  static createBoard(gameOptions: GameOptions): Board {
    debugger;
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
        const oneDimensionIndex = r * rows + c;
        const hasBomb = bombsIndexMap.includes(oneDimensionIndex);
        cells[r].push({ hasBomb } as Cell);
      }
    }

    return { cells } as Board;
  }
}

export default MinesweeperController;
