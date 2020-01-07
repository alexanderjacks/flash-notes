import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      { /* Catch any unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
