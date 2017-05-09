// id is unused here, just return mock data
import * as types from '../constants/actionTypes';
import * as mockData from '../store/mockData';

export const getSalesRegionFieldData = id => {
  return function(dispatch) {
    // do something async here
    const data = mockData.default.getField();
    dispatch(receiveSalesRegionFieldData(data));
  };
};

export const saveSalesRegionFieldData = formData => {
  return function(dispatch) {
    // write to log
    console.log(formData);
    dispatch(receiveSalesRegionFieldData(formData));
  };
};

const receiveSalesRegionFieldData = data => {
  return {
    type: types.RECEIVE_SALES_REGION_FIELD_DATA,
    data
  };
};

export const receiveSaveResponse = data => {
  return {
    type: types.RECEIVE_SAVE_RESPONSE,
    data
  };
};
