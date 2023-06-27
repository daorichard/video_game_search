import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from '@components/App';

// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
