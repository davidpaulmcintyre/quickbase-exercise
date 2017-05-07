import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function salesRegionReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SALES_REGION_FIELD_DATA: {
      return Object.assign({}, state, {});
    }
    default:
      return state;
  }
}
