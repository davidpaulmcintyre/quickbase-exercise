import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div>
      {props.children}
      <div><a>What is CommuteCall?</a></div>
      <div><a>Download CommuteCall from App Store</a></div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
