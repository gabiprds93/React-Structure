import React from 'react';

interface Context {
  isAuthenticated?: boolean
  login?: () => void
}

export const AuthContext = React.createContext<Context>({})
