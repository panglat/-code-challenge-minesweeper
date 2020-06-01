import { CREATE_GAME, GameActions, REVEAL_CELL } from './types';
import GameOptions from '../../models/GameOptions';
import Cell from '../../models/Cell';

export function CreateGame(gameOptions: GameOptions): GameActions {
  return {
    type: CREATE_GAME,
    payload: gameOptions,
  };
}

export function RevealCell(cell: Cell): GameActions {
  return {
    type: REVEAL_CELL,
    payload: cell,
  };
}
