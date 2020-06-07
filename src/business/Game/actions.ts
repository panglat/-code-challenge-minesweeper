import {
  CREATE_GAME,
  GameActions,
  REVEAL_CELL,
  FLAG_CELL,
  RESET_GAME,
} from './types';
import GameOptions from 'models/GameOptions';
import Cell from 'models/Cell';

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

export function FlagCell(cell: Cell): GameActions {
  return {
    type: FLAG_CELL,
    payload: cell,
  };
}

export function ResetGame(): GameActions {
  return {
    type: RESET_GAME,
  };
}
