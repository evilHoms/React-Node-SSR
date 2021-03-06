import { renderToString } from 'react-dom/server';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes';
import renderFullPage from './renderFullPage';
import App from 'Client/App';
import reducers, { initialState } from 'Reducers';

const router = (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
  if (!match) {
    res.status(404).send('page not found');
    return;
  }

  const preloadedState = initialState;
  const store = createStore(reducers, preloadedState);
  const finalState = store.getState();
  const context = {};
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const html = renderToString(
    <Provider store={ store }>
      <StyleContext.Provider value={{ insertCss }}>
        <StaticRouter context={ context } location={ req.url }>
          <App />
        </StaticRouter>
      </StyleContext.Provider>
    </Provider>
  );
  
  res.status(200).send(renderFullPage(html, css, finalState));
};

export default router;