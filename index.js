import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/containers/Root';
import configureStore from './src/store/configureStore';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
