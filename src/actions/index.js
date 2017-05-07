// id is unused here, just return mock data
import * as types from '../constants/actionTypes';
import * as mockData from '../store/mockData';

const getSalesRegionFieldData = id => {
  return function(dispatch) {
    return {
      type: types.GET_SALES_REGION_FIELD_DATA,
      data: mockData.default.getField()
    };
  };
};

export { getSalesRegionFieldData };
