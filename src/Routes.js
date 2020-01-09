import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path='/' exact component={Home} appProps={appProps} />
      <AppliedRoute path='/login' exact component={Login} appProps={appProps} />
      { /* Catch any unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
