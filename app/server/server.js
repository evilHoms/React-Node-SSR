import express from 'express';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import formData from 'express-form-data';
import os from 'os';

import apiRoutes from 'Api/apiRoutes';

import renderer from './reactRenderer/renderer';
import icon from '../public/images/favicon.ico';

const publicPath = path.join(__dirname, 'public');
const staticPath = express.static(publicPath);
const app = express();

app.use(staticPath);
app.use(favicon(path.join(__dirname, icon)));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Options are the same as multiparty takes.
 * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
 * By default, it is "false".
 */
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

// parse data with connect-multiparty. 
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream 
app.use(formData.stream());
// union the body and the files
app.use(formData.union());

// Apply server side rendering
app.use(renderer);

// Define all routes from Api/apiRoutes
apiRoutes.forEach(route => {
  app.use(route.path, route.router);
});

export default app;