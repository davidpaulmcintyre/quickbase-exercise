import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Appointment from './components/Appointment';
// import HomePage from './components/HomePage';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
// import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <Route path="appointment" component={Appointment}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
