import * as types from '../constants/actionTypes';

const goTo = (id) => {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_FUEL_SAVINGS,
      id
      // dateModified: dateHelper.getFormattedDateTime(),
      // settings
    });
  };
}

export {
  goTo
}
