import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { hitlistReducers } from './store/reducers';

import { Global } from './GlobalStyle.js';

const store = createStore(hitlistReducers);

ReactDOM.render(
  <Global>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Global>,
  document.getElementById('root')
);
registerServiceWorker();
