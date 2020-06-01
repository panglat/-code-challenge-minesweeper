import Cell from './Cell';
import GameOptions from './GameOptions';
import GameStatus from './GameStatus';

interface Game {
  board: Cell[][];
  options: GameOptions;
  status: GameStatus;
}

export default Game;
