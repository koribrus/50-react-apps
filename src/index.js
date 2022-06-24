import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import FiftyApps from './components/FiftyApps';
import store from './redux/configureStore';

import './styles.css';

const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <FiftyApps />
    </BrowserRouter>
  </Provider>
);
