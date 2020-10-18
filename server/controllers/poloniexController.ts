import { Request, Response, NextFunction } from 'express';
import io from 'socket.io-client';

// const poloniexController = {};



/* ----- Poloniex API format ----- */
// URL: ws wss://api2.poloniex.com
// > MESSAGE: {"command": "subscribe", "channel": "BTC_ETH"}

const poloniexController = {
  
  getBooks: (req: Request, res: Response, next: NextFunction): void => {
  // add variable for different exchanges
    try {
      const socket = io('wss://api2.poloniex.com', {
        reconnectionDelayMax: 10000,
      })
      socket.on('connect', () => {
        console.log('Socket connected is ', socket.connected);
        next();
      });
    } catch (e) {
      next(e);
    }
  }
}


export default poloniexController;