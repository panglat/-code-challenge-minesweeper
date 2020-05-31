import { combineReducers } from 'redux';
import { GameReducer } from '../business/Game/reducer';

const rootReducer = combineReducers({
  game: GameReducer,
});

export default rootReducer;
