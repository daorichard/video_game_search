import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from '@components/App';
import { Provider } from 'react-redux';
import styles from './scss/application.scss';
import store from './reducers/store';

// react render
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
