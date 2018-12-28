import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import BaseLayout from './components/base-layout';
import Home from './features/home';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <BaseLayout>
            <Home />
          </BaseLayout>
        )}
      />
    </Switch>
  </Router>
);

export default App;
