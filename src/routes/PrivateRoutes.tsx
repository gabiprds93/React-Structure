import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import listRoutes from '../services/config/listRoutes'
import Register from '../domain/Register';

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path={listRoutes.PROFILE} component={Register}></Route>
      <Redirect to={listRoutes.PROFILE} />
    </Switch>
  );
}

export default PrivateRoutes;
