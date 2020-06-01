import GameOptions from '../../models/GameOptions';
import Game from '../../models/Game';
import Cell from '../../models/Cell';

export const CREATE_GAME = 'CREATE_GAME';
export const REVEAL_CELL = 'REVEAL_CELL';

interface CreateGameAction {
  type: typeof CREATE_GAME;
  payload: GameOptions;
}

interface RevealCellAction {
  type: typeof REVEAL_CELL;
  payload: Cell;
}

export type GameActions = CreateGameAction | RevealCellAction;

export interface GameState {
  game: Game | null;
}
