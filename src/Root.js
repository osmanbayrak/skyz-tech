import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import GlobalLayout from './Layout';
import Home from './views/Home';
import Technologies from './views/Technologies';
import Solutions from './views/Solutions';

const Root = () => (
  <GlobalLayout>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/technologies" component={Technologies} />
      <Route exact path="/solutions" component={Solutions} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);
