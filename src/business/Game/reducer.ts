import {
  GameState,
  GameActions,
  CREATE_GAME,
  REVEAL_CELL,
  FLAG_CELL,
} from './types';
import MinesweeperController from '../../controller/MinesweeperController';
import Game from '../../models/Game';

const initialState: GameState = {
  game: null,
};

export function GameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case CREATE_GAME:
      return {
        game: MinesweeperController.createGame(action.payload),
      };

    case REVEAL_CELL:
      return {
        game: MinesweeperController.revealCell(
          state.game as Game,
          action.payload
        ),
      };

    case FLAG_CELL:
      return {
        game: MinesweeperController.flagCell(
          state.game as Game,
          action.payload
        ),
      };

    default:
      return state;
  }
}
