import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import ChuckService from './services/chuck-service';
import { ChuckServiceContext } from './components/chuck-service-context';

import App from './components/app';

const chuckService = new ChuckService();

ReactDOM.render(
  <Provider store={store}>
    <ChuckServiceContext.Provider value={chuckService}>
        <App/>
    </ChuckServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
)
