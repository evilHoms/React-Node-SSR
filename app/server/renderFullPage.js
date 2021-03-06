const isProduction = process.env.NODE_ENV === 'production';
const clientRef = isProduction ? '/client.js' : `http://localhost:${(Number(process.env.PORT) || 4000) + 1}/client.js`;

const renderFullPage = (html, styles, preloadedState) => (`
  <!doctype html>
  <html>
  <head>
    <title>Title</title>
    <style>${[...styles].join('')}</style>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
    </script>
    <script src="${clientRef}"></script>
  </body>
  </html>
`);

export default renderFullPage;