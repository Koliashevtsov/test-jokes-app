import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import persistState from 'redux-localstorage';

import reducer from './reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  persistState()
)

const store = createStore(reducer, enhancer);

export default store;
