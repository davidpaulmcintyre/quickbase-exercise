import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import DefaultComponent from './components/DefaultComponent';
import FieldBuilderContainer from './components/FieldBuilderContainer';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DefaultComponent} />
    <Route path="sales-region" component={FieldBuilderContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
