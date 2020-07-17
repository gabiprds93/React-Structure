import React from 'react';
import { useTranslation } from "react-i18next";

import Title from '../../../components/Title/Title';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t('profileTitle')}</Title>
      <p></p>
    </div>
  );
};

export default Profile;