import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import RootPage from '../../routes';
import SelectLang from '../../domain/Language/SelectLang';
import { AuthProvider } from '../../context/Auth/AuthProvider';
import store from '../../redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider>
          <SelectLang />
          <RootPage />
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
