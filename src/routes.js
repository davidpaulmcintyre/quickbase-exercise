import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import DefaultComponent from './components/DefaultComponent';
import FieldBuilder from './components/FieldBuilder';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DefaultComponent} />
    <Route path="sales-region" component={FieldBuilder} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
