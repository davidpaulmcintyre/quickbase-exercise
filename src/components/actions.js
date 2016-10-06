const goTo = (id) => {
  return function (dispatch) {
    return dispatch({
      type: 'CONFIRM',
      id
      // dateModified: dateHelper.getFormattedDateTime(),
      // settings
    });
  };
}

const sendNotification = (date) => {
  const urlPushServer = 'api.development.push.apple.com:443';
  const prefix = 'YHLRFEMTF5';
  const id = 'com.commutecall.commutecall';
};
export {
  goTo
}
