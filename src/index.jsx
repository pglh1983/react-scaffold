/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';

// Hot module replacement - parcel, dev mode
if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <h1>Hello React!</h1>
);
// render the app
render(<MainApp />, document.getElementById('app'));