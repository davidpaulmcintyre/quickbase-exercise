const goTo = id => {
  return function(dispatch) {
    return dispatch({
      type: 'CONFIRM',
      id
      // dateModified: dateHelper.getFormattedDateTime(),
      // settings
    });
  };
};
export { goTo };
