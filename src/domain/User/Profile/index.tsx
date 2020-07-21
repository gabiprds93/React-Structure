import React from 'react';
import { useTranslation } from "react-i18next";
import {connect} from 'react-redux';

import Title from '../../../components/Title/Title';
import { AppState } from '../../../redux/reducers';
import { UserState } from '../../../redux/types/userTypes';

interface IProfileProps {
  user: UserState
}

const Profile: React.FC<IProfileProps> = ({user}) => {
  const { t } = useTranslation();
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

export default connect(mapStateToProps)(Profile);