import { GAME_CREATE, GameActions } from './types';
import GameOptions from '../../models/GameOptions';

export function gameCreate(gameOptions: GameOptions): GameActions {
  return {
    type: GAME_CREATE,
    payload: gameOptions,
  };
}
