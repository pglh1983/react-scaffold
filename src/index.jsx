/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';

// Hot module replacement - parcel, dev mode
if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <Provider store={store}>
    <h1>Hello React!</h1>
  </Provider>
);
// render the app
render(<MainApp />, document.getElementById('app'));
