import { RootState } from '../../store/rootReducer';

export const gameOptionsSelector = (state: RootState) => state.game.gameOptions;
export const boardSelector = (state: RootState) => state.game.board;
