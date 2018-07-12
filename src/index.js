import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import Page from './components/page'

const store = createStore(allReducers);

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);