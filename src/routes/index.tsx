import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthContext } from '../context/Auth/AuthContext';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { AppState } from '../redux/reducers';
import { UserState } from '../redux/types/userTypes';

interface IRootPageProps {
  user: UserState
}

const RootPage: React.FC<IRootPageProps> = ({user}) => {
  const auth = React.useContext(AuthContext)
  console.log(auth)
  return (
    <BrowserRouter>
      {user.isAuthenticated 
        ? <PrivateRoutes />
        : <PublicRoutes />
      }
    </BrowserRouter>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: state.user
})

export default connect(mapStateToProps)(RootPage);
