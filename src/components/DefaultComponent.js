import React from 'react';
import { Link } from 'react-router';
import '../styles/app.css';

const DefaultComponent = () => {
  return (
    <div className="home">
      <h4>
        {'Forms'}
      </h4>
      <Link to="/sales-region">{'Sales Region'}</Link>
    </div>
  );
};

export default DefaultComponent;
