import express from 'express';
import cors from 'cors';
import path from 'path';

import router from './router';

const publicPath = express.static(path.join(__dirname, './public'))
const app = express();

app.use(cors());
app.use(router);

export default app;