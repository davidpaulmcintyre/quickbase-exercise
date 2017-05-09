import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function(state = initialState.sales, action) {
  switch (action.type) {
    case types.RECEIVE_SALES_REGION_FIELD_DATA: {
      // to show option with > 40 chars
      let data = action.data;
      // if (action.data.choices) {
      //   const choices = action.data.choices.concat([
      //     'Australia, New Zealand, and the Pacific Islands'
      //   ]);
      //   data = Object.assign({}, action.data, { choices });
      //   console.log(data);
      // }
      return Object.assign({}, state, { region: data });
    }
    default:
      return state;
  }
}
