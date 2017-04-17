import React, { PropTypes } from 'react';
import '../styles/appointment.css';

const App = (props) => {
  return (
    <div>
      {props.children}
      <div className='lowerFooter'>
        <span className="what_is"><a>What is Commute Call?</a></span>
        <span className="download_link"><a>Download Commute Call from App Store</a></span>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
