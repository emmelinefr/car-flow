import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import carrosRouter from './routers/carros.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/carros', carrosRouter);

export default app;
