import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import listRoutes from '../services/config/listRoutes'
import Register from '../domain/Register';
import Login from '../domain/Login';

const RootPage = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={listRoutes.ROOT} component={Register}></Route>
          <Route exact path={listRoutes.LOGIN} component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RootPage;
