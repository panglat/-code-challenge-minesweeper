import GameOptions from 'models/GameOptions';
import Game from 'models/Game';
import Cell from 'models/Cell';

export const CREATE_GAME = 'CREATE_GAME';
export const REVEAL_CELL = 'REVEAL_CELL';
export const FLAG_CELL = 'FLAG_CELL';
export const RESET_GAME = 'RESET_GAME';

interface CreateGameAction {
  type: typeof CREATE_GAME;
  payload: GameOptions;
}

interface RevealCellAction {
  type: typeof REVEAL_CELL;
  payload: Cell;
}

interface FlagCellAction {
  type: typeof FLAG_CELL;
  payload: Cell;
}

interface ResetGameAction {
  type: typeof RESET_GAME;
}

export type GameActions =
  | CreateGameAction
  | RevealCellAction
  | FlagCellAction
  | ResetGameAction;

export interface GameState {
  game: Game | null;
}
