import { combineReducers } from 'redux';
import salesReducer from './salesReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  sales: salesReducer,
  routing: routerReducer
});

export default rootReducer;
