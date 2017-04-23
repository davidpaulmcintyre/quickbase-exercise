import React, { PropTypes } from 'react';
import moment from 'moment';

const App = (props) => {
  const query = props.location.query;
  const dateStart = moment();
  const strEnd = dateStart.clone().add(1, 'hours').toISOString();
  const strStart = dateStart.toISOString();
  console.log('start ', strStart);
  console.log('end ', strEnd);
  const _uri = `/download?first=${query.first}&last=${query.last}&email=${query.email}&start=${strStart}&end=${strEnd}&phone=${query.phone}`
  return (
    <div>
      {props.children}

      <a href={_uri} download={true}>Download appointment</a>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
