import { GameState, GameOptions, GameActions, GAME_SETUP } from './types';

const initialState: GameState = {
  gameOptions: { cols: 0, rows: 0 } as GameOptions,
};

export function GameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GAME_SETUP:
      return {
        gameOptions: action.payload,
      };

    default:
      return state;
  }
}
