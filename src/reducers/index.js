import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { datas } from './states';

export default combineReducers({
  datas,
  router: routerReducer,
});
