import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'

import App from './App';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

hydrate((
  <AppContainer>
    <StyleContext.Provider value={{ insertCss }}>
      <Router>
        <App preloadedState={ window.__PRELOADED_STATE__ } />
      </Router>
    </StyleContext.Provider>
  </AppContainer>),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    hydrate(
      <AppContainer>
        <StyleContext.Provider value={{ insertCss }}>
          <App />
        </StyleContext.Provider>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}