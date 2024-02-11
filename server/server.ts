import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();
const port = process.env.PORT || 3004;

app.get('/', express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});