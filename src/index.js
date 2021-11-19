import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './i18next'

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
