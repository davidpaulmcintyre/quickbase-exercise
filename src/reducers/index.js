import { combineReducers } from 'redux';
import reducer from './reducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  reducer,
  routing: routerReducer
});

export default rootReducer;
