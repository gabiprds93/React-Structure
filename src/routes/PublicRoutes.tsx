import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import listRoutes from '../services/config/listRoutes'
import Register from '../domain/Register';
import Login from '../domain/Login';
import Dashboard from '../domain/Dashboard';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={listRoutes.ROOT} component={Register}></Route>
      <Route exact path={listRoutes.LOGIN} component={Login}></Route>
      <Route exact path={listRoutes.DASHBOARD} component={Dashboard}></Route>
      <Redirect to={listRoutes.ROOT} />
    </Switch>
  );
}

export default PublicRoutes;
