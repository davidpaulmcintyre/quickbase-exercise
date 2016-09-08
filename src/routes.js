import React from 'react';
import { Route } from 'react-router';
import {  } from 'react-router'
import App from './components/App';
import Appointment from './components/Appointment';
import Confirmation from './components/Confirmation';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <Route path="appointment" component={Appointment}/>
    <Route path="confirmation" component={Confirmation}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
