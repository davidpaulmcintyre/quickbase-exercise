import { combineReducers } from 'redux';
import salesReducer from './salesReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  sales: salesReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
