import React from 'react';

import './App.css';
import RootPage from '../../routes';
import SelectLang from '../../domain/Language/SelectLang';
import { AuthProvider } from '../../context/Auth/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SelectLang />
        <RootPage />
      </AuthProvider>
    </div>
  );
}

export default App;
