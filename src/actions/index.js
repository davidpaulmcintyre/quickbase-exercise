// id is unused here, just return mock data
import * as types from '../constants/actionTypes';
import * as mockData from '../store/mockData';
import fetch from 'isomorphic-fetch';
const URI_POST = 'http://www.mocky.io/v2/566061f21200008e3aabd919';

export const getSalesRegionFieldData = id => {
  return function(dispatch) {
    // do something async here
    const data = mockData.default.getField(id);
    dispatch(receiveSalesRegionFieldData(data));
  };
};

export const saveSalesRegionFieldData = formData => {
  return dispatch => {
    // write to log
    /* eslint-disable no-console */
    console.log(formData);
    /* eslint-enable no-console */
    const body = JSON.stringify(formData);
    fetch(URI_POST, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body
    })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .catch(function(error) {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
      });

    dispatch(receiveSalesRegionFieldData(formData));
  };
};

const receiveSalesRegionFieldData = data => {
  return {
    type: types.RECEIVE_SALES_REGION_FIELD_DATA,
    data
  };
};
