import express from 'express';

const InfoRouter = express.Router();

InfoRouter.get('/', (req, res) => {
    res.send('This is the Info page');
});

export default InfoRouter;

