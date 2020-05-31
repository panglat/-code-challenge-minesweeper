import { GameOptions, GAME_SETUP, GameActions } from './types';

export function gameSetup(newGameSetup: GameOptions): GameActions {
  return {
    type: GAME_SETUP,
    payload: newGameSetup,
  };
}
