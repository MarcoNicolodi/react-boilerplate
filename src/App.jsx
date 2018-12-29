import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import BaseLayout from './components/base-layout';
import NotFound from './components/not-found';
import Home from './features/home';
import SearchUsers from './features/search-users';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <BaseLayout {...props}>
            <Home />
          </BaseLayout>
        )}
      />
      <Route
        path="/users"
        render={props => (
          <BaseLayout {...props}>
            <SearchUsers />
          </BaseLayout>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
