import React from 'react';
import { useTranslation } from "react-i18next";
import {connect} from 'react-redux';

import Title from '../../../components/Title/Title';
import { AppState } from '../../../redux/reducers';
import { UserState } from '../../../redux/types/userTypes';
import {clearUser} from '../../../redux/actions/userActions';
import { Dispatch, AnyAction } from 'redux';
import deleteAuth from '../services/deleteAuth';

interface IProfileProps {
  user: UserState,
  clearUser: typeof clearUser
}

const Profile: React.FC<IProfileProps> = ({user, clearUser}) => {
  const { t } = useTranslation();
  deleteAuth(clearUser)

  return (
    <div>
      <Title>{t('profileTitle')}</Title>
      {user && user.profile && (
        <p>{user.profile.name}</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return{
    clearUser: () => dispatch(clearUser())}
  } 

export default connect(mapStateToProps, mapDispatchToProps)(Profile);