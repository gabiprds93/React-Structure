import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import { AuthContext } from '../context/Auth/AuthContext';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const RootPage = () => {
  const auth = React.useContext(AuthContext)
  
  return (
    <BrowserRouter>
      {auth.isAuthenticated 
        ? <PrivateRoutes />
        : <PublicRoutes />
      }
    </BrowserRouter>
  );
}

export default RootPage;
