import React from 'react';

import MainPanel from '../main-panel';
import SidePanel from '../side-panel';

import './reset.css';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <MainPanel/>
      <SidePanel/>
    </div>
  );
}
export default App;
