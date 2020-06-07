import configureStore from 'store/configureStore';
import { loadState, saveState } from 'components/helpers/localStorage';

const persistedState = loadState();
export const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});
