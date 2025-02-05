import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './components/Home';
import Economy from './components/Economy';
import Border from './components/Border';
import Golf from './components/Golf';

import ResetPassword from './components/ResetPassword';
import NotFound from './components/NotFound';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path='/' exact component={Home} props={appProps} />
      <AppliedRoute path='/economy' exact component={Economy} props={appProps} />
      <AppliedRoute path='/border' exact component={Border} props={appProps} />
      <AppliedRoute path='/golf' exact component={Golf} props={appProps} />

      { /* Catch any unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
