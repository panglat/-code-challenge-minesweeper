import { GameState, GameActions, GAME_CREATE } from './types';
import MinesweeperController from '../../controller/MinesweeperController';

const initialState: GameState = {
  game: null,
};

export function GameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GAME_CREATE:
      return {
        game: MinesweeperController.createGame(action.payload),
      };

    default:
      return state;
  }
}
