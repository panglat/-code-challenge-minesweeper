import GameOptions from '../../models/GameOptions';
import Game from '../../models/Game';

export const GAME_CREATE = 'GAME_CREATE';

interface GameSetupAction {
  type: typeof GAME_CREATE;
  payload: GameOptions;
}

export type GameActions = GameSetupAction;

export interface GameState {
  game: Game | null;
}
