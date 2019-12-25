import app from 'Server/server.js';
import Users from './routes/Users';

const apiRoutes = [{
  path: '/users',
  acceptableApiRoutes: [
    '/users',
    '/users/*'
  ],
  router: Users
}];

export default apiRoutes;
