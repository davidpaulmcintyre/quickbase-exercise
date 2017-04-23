import React, { PropTypes } from 'react';
import '../styles/appointment.css';
var imgDownload = require("../images/app_store.png"); 

const App = (props) => {
  return (
    <div>
      {props.children}
      <div className='lowerFooter'>
        <span className="what_is"><a className='what_is_link' href="http://www.commutecall.co" target="_blank">What is Commute Call?</a></span>
        <div><img className="download_link" src={imgDownload}></img></div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
