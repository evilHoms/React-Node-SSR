// dotenv could be removed if used other way to define env vars
import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';

import { log } from 'Logger';
import connectMongo from 'Mongo';
import app from './server';

const server = createServer(app);
let currentApp = app;
const port = process.env.PORT || 4000;

server.listen(port, () => {
  log(`Server is running on ${port} port`);
  
  connectMongo();
});

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
