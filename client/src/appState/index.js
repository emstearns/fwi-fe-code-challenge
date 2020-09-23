import { combineReducers } from 'redux';
import players from './playersSlice';
import dialog from './dialogSlice';

export default combineReducers({
  dialog,
  players,
});
