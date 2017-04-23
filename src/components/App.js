import React, { PropTypes } from 'react';
import '../styles/appointment.css';
// var imgDownload = require("../images/appstore.png"); match to name of img file you added

const App = (props) => {
  return (
    <div>
      {props.children}
      <div className='lowerFooter'>
        <span className="what_is"><a className='what_is_link' href="http://www.commutecall.co" target="_blank">What is Commute Call?</a></span>
        <div className="download_link"><img src='/images/app_store.png'></img></div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
