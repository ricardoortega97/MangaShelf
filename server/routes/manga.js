import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mangaController from '../controllers/manga.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mangaRouter = express.Router();

// mangaRouter.get('/', (req, res) => {
//     res.status(200).json(managaData);
// });

mangaRouter.get('/', mangaController.getManga);


mangaRouter.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/manga.html'));
});

export default mangaRouter;