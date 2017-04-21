import React, { PropTypes } from 'react';
// var imgDownload = require("../images/appstore.png"); match to name of img file you added

const App = (props) => {
  return (
    <div>
      {props.children}
      <div><a>What is CommuteCall?</a></div>
      <div><a>Download CommuteCall from App Store</a></div>
      {/* remove this to enable this img tag below
        
        <img src={imgDownload}/>

      and remove this bracket here as well /*}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
