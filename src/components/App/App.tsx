import React from 'react';
import { Provider } from 'react-redux';

import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import RootPage from '../../routes';
import SelectLang from '../../domain/Language/SelectLang';
import store from '../../redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SelectLang />
        <RootPage />
      </Provider>
    </div>
  );
}

export default App;
