import { Router, Request, Response } from 'express';

const apiRouter = Router();

import poloniexController from '../controllers/poloniexController';
import bittrexController from '../controllers/bittrexController';

apiRouter.get('/', bittrexController.getBooks, poloniexController.getBooks, (req: Request, res: Response): void => {
  const poloniexData = res.locals.poloniex; 
  const bittrexData = res.locals.bittrex;
  
  // merge bid and ask arrays from Poloniex and Bittrex
  const data = {
    bid: [...poloniexData.bid, ...bittrexData.bid],
    ask: [...poloniexData.ask, ...bittrexData.ask]
  };
  
  res.status(200).json(data);
});

export default apiRouter;