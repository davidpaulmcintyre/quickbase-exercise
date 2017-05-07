import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function(state = initialState.sales, action) {
  switch (action.type) {
    case types.RECEIVE_SALES_REGION_FIELD_DATA: {
      return Object.assign({}, state, { region: action.data });
    }
    default:
      return state;
  }
}
