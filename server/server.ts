import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import InfoRouter from './routes/InfoRoutes';
import rootRouter from './routes/rootRouter';
dotenv.config();

const app = express();
const port = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
app.get('/', express.static(path.join(__filename, '/public')));

app.use('/', rootRouter);
app.use('/info', InfoRouter);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__filename, '../..', 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});