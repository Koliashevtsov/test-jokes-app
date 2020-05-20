import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import ChuckService from './services/chuck-service';
import { ChuckServiceContext } from './components/chuck-service-context';

import MainPanel from './components/main-panel';

const chuckService = new ChuckService();

const App = () => {
  return (
    <MainPanel/>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ChuckServiceContext.Provider value={chuckService}>
      <App/>
    </ChuckServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
)
