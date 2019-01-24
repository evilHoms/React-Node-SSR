import { createServer } from 'http';
import app from './server';

const server = createServer(app);
let currentApp = app;
const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server is running on ${port} port`));

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
