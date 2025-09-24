import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
import managaData from '../data/mangaData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mangaRouter = express.Router();

mangaRouter.get('/', (req, res) => {
    res.status(200).json(managaData);
});

mangaRouter.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/manga.html'));
});

export default mangaRouter;