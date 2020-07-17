import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import listRoutes from '../services/config/listRoutes'
import Profile from '../domain/User/Profile';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path={listRoutes.PROFILE} component={Profile}></Route>
      <Redirect to={listRoutes.PROFILE} />
    </Switch>
  );
}

export default PrivateRoutes;
