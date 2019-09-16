import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import GlobalLayout from './Layout';
import Home from './views/Home';
import Gp from './views/Gp';

const Root = () => (
  <GlobalLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gp" component={Gp} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);
