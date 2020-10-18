import path from 'path';
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

import apiRouter from './routes/apiRouter';
// const apiRouter = require('./routes/apiRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

/* ----- PARSE REQUESTS ----- */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ----- STATIC ASSETS ----- */
app.use('/', express.static(path.resolve(__dirname, '../dist')));

/* ----- ROUTES ----- */
app.use('/api', apiRouter);

/* ----- CATCH-ALL ROUTE HANDLER ----- */
app.use((req: Request, res: Response) => res.sendStatus(404));

/* ----- GLOBAL ERROR HANDLER ----- */
// eslint-disable-next-line no-unused-vars
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const defaultError = {
    log: 'ERROR: handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occured' },
  };
  const error = { ...defaultError, ...err };
  console.error(error.log);
  return res.status(error.status).json(error.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
