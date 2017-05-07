// id is unused here, just return mock data
import * as types from '../constants/actionTypes';
import * as mockData from '../store/mockData';

const getSalesRegionFieldData = id => {
  return function(dispatch) {
    // do something async here
    const data = mockData.default.getField();
    dispatch(receiveSalesRegionFieldData(data));
  };
};

const receiveSalesRegionFieldData = data => {
  return {
    type: types.RECEIVE_SALES_REGION_FIELD_DATA,
    data
  };
};

export { getSalesRegionFieldData };
