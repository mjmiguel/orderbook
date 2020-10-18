import { Router, Request, Response } from 'express';

const apiRouter = Router();

import poloniexController from '../controllers/poloniexController';
import bittrexController from '../controllers/bittrexController';

apiRouter.get('/polo', poloniexController.getBooks, (req: Request, res: Response): void => {
  res.status(200).json({ message: 'got poloniex data', data: res.locals.poloniex });
});

apiRouter.get('/bitt', bittrexController.getBooks, (req: Request, res: Response): void => {
  res.status(200).json({ message: 'got bittrex data', data: res.locals.bittrex });
});

export default apiRouter;