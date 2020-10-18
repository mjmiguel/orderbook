import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

/* ----- Bittrex API format ----- */
// URL: https://api.bittrex.com/v3/markets/ETH-BTC/orderbook?depth=25
// default depth is 25
const bittrexController = {
  
  getBooks: (req: Request, res: Response, next: NextFunction): void => {
    console.log('got to getbooks')
  // add variable for different exchanges
    fetch('https://api.bittrex.com/v3/markets/ETH-BTC/orderbook')
      .then((res) => res.json())
      .then((data) => {
        res.locals.bittrex = data;
        next();
      }).catch((error) => {
        console.log('error in bittrex controller');
        next(error);
      })
  }
}


export default bittrexController;