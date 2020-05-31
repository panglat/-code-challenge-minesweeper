import { GameState, GameActions, GAME_CREATE } from './types';
import GameOptions from '../../models/GameOptions';
import Board from '../../models/Board';
import MinesweeperController from '../../controller/MinesweeperController';

const initialState: GameState = {
  gameOptions: { cols: 0, rows: 0 } as GameOptions,
  board: {} as Board,
};

export function GameReducer(
  state = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GAME_CREATE:
      return {
        gameOptions: action.payload,
        board: MinesweeperController.createBoard(action.payload),
      };

    default:
      return state;
  }
}
