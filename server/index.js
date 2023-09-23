import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import reviewRouter from './routers/reviewRouter.js';
app.use('/reviews', reviewRouter);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
