// dotenv could be removed if used other way to define env vars
import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';

import app from './server';
import logger from './logger';
import connectMongo from './mongo';

const server = createServer(app);
let currentApp = app;
const port = process.env.PORT || 4000;

server.listen(port, () => {
  logger.log({
    level: 'info',
    message: `Server is running on ${port} port`
  });
  
  connectMongo();
});

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
