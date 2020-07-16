import React from 'react';

import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [isAuthenticated, setIsAuth] = React.useState(
    Boolean(localStorage.getItem('token_web')),
  )

  const login = React.useCallback(() => {
    setIsAuth(true)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  )
}
