import { Router, Request, Response } from 'express';

const apiRouter = Router();


// import bittrexController from '../controllers/bittrexController';
import poloniexController from '../controllers/poloniexController';


apiRouter.get('/', poloniexController.getBooks, (req: Request, res: Response): void => {
  res.status(200).json({ message: 'it works i think' });
});

export default apiRouter;