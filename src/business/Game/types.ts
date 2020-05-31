import GameOptions from '../../models/GameOptions';
import Board from '../../models/Board';

export const GAME_CREATE = 'GAME_CREATE';

interface GameSetupAction {
  type: typeof GAME_CREATE;
  payload: GameOptions;
}

export type GameActions = GameSetupAction;

export interface GameState {
  gameOptions: GameOptions;
  board: Board;
}
