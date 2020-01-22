import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './components/Home';
import Login from './components/Login';
import Golf from './components/Golf';
import ResetPassword from './components/ResetPassword';
import NotFound from './components/NotFound';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path='/' exact component={Home} props={appProps} />
      <AppliedRoute path='/golf' exact component={Golf} props={appProps} />
      <AppliedRoute path='/login' exact component={Login} props={appProps} />
      <AppliedRoute path='/login/reset' exact component={ResetPassword} props={appProps} />

      { /* Catch any unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
