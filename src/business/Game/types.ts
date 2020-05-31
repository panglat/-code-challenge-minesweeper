export const GAME_SETUP = 'GAME_SETUP';

export interface GameOptions {
  cols: number;
  rows: number;
}

interface GameSetupAction {
  type: typeof GAME_SETUP;
  payload: GameOptions;
}

export type GameActions = GameSetupAction;

export interface GameState {
  gameOptions: GameOptions;
}
