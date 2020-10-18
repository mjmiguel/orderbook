import { Request, Response, NextFunction } from 'express';

// const poloniexController = {};
const WebSocket = require('ws');
 

/* ----- Poloniex API format ----- */
// URL: ws wss://api2.poloniex.com
// > MESSAGE: {"command": "subscribe", "channel": "BTC_ETH"}

const poloniexController = {
  
  getBooks: (req: Request, res: Response, next: NextFunction): void => {
    console.log('got to getbooks')
  // add variable for different exchanges
    try {
      const ws = new WebSocket('wss://api2.poloniex.com');

      ws.on('open', function open() {
        ws.send(JSON.stringify({"command": "subscribe", "channel": "BTC_ETH"}));
      });
       
      ws.on('message', function incoming(data:any) {
        console.log(data);
      });
    } catch (e) {
      next(e);
    }
  }
}


export default poloniexController;