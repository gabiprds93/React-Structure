import React from 'react';

import './App.css';
import RootPage from '../../routes';
import SelectLang from '../../domain/Language/SelectLang';

function App() {
  return (
    <div className="App">
      <SelectLang />
      <RootPage />
    </div>
  );
}

export default App;
