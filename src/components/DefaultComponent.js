import React from 'react';
import { Link } from 'react-router';

const DefaultComponent = () => {
  return (
    <div>
      <h4>
        {'Forms'}
      </h4>
      <Link to="/sales-region">{'Sales Region'}</Link>
    </div>
  );
};

export default DefaultComponent;
