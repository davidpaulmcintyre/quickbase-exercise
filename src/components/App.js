import React, { PropTypes } from 'react';

const App = (props) => {
  return (
    <div>
      {props.children}
      <div className="what_is"><a>What is CommuteCall?</a></div>
      <div className="download_link"><a>Download CommuteCall from App Store</a></div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
