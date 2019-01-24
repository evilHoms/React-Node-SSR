import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

render((
  <AppContainer>
    <Router>
      <App preloadedState={ window.__PRELOADED_STATE__ } />
    </Router>
  </AppContainer>),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}