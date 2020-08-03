import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import listRoutes from '../services/config/listRoutes'
import Register from '../domain/Register';
import Login from '../domain/Login';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path={listRoutes.ROOT} component={Register}></Route>
      <Route exact path={listRoutes.LOGIN} component={Login}></Route>
      <Redirect to={listRoutes.ROOT} />
    </Switch>
  );
}

export default PublicRoutes;
