import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from 'Reducers';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState);

hydrate((
  <AppContainer>
    <Provider store={ store }>
      <StyleContext.Provider value={{ insertCss }}>
        <Router>
          <App preloadedState={ window.__PRELOADED_STATE__ } />
        </Router>
      </StyleContext.Provider>
    </Provider>
  </AppContainer>),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    hydrate(
      <AppContainer>
        <Provider store={ store }>
          <StyleContext.Provider value={{ insertCss }}>
            <App />
          </StyleContext.Provider>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}