import express from 'express';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';

import router from './router';
import icon from '../public/images/favicon.ico';

const publicPath = path.join(__dirname, 'public');
const staticPath = express.static(publicPath);
const app = express();

app.use(staticPath);
app.use(favicon(path.join(__dirname, icon)));
app.use(cors());
app.use(router);

export default app;