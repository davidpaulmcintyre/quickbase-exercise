import React, { PropTypes } from 'react';
import '../styles/fieldBuilder.css';

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
