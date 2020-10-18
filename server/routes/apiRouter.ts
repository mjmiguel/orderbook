import { Router, Request, Response } from 'express';

const router = Router();


// import bittrexController from '../controllers/bittrexController';
import poloniexController from '../controllers/poloniexController';


router.get('/', poloniexController.getBooks, (req: Request, res: Response): void => {
  res.status(200).json({ message: 'it works i think' });
});

export default router;