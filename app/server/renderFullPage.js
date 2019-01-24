const renderFullPage = (html, preloadedState) => (`
  <!doctype html>
  <html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
      console.log(window.__PRELOADED_STATE__);
    </script>
    <script src="http://localhost:${(Number(process.env.PORT) || 4000) + 1}/client.js"></script>
  </body>
  </html>
`);

export default renderFullPage;