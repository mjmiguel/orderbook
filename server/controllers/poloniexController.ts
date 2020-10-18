import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
 
/* ----- Poloniex API format ----- */
// URL: https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH

// New object composed from response and tagged with exchange
interface exchangeObject {
  exchange: string,
  quantity: number,
  price: number
}

// Processed response sent back to client
interface processedData { 
  [bid: string]: exchangeObject[],
  ask: exchangeObject[]
}

// Compose new object from data recieved from API
const processResponse = (jsonObj:any): processedData  => {
  let resultObj: processedData = {
    bid: [],
    ask: []
  };

  // create objects from returned data and add them to resultObj
  const addObjects = (bookType: string, arr:(string | number)[][]): void => {
    arr.forEach((element: (string | number)[]) => {
      let exchangeObj: exchangeObject = {
        exchange: '',
        quantity: 0,
        price: 0
      }
      exchangeObj.exchange = 'poloniex';
      exchangeObj.quantity = Number(element[0]);
      exchangeObj.price = Number(element[1]);
      resultObj[bookType].push(exchangeObj);
    });
  }

  // process bids and asks arrays from API response
  addObjects('bid', jsonObj.bids);
  addObjects('ask',jsonObj.asks)

  return resultObj;
}

const poloniexController = {
  
  getBooks: (req: Request, res: Response, next: NextFunction): void => {
    console.log('got to getbooks')
  // TODO: add variables for different markets
    fetch('https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=25')
      .then((res) => res.json())
      .then((data) => {
        const processedData = processResponse(data);
        res.locals.poloniex = processedData;
        next();
      }).catch((error) => {
        console.log('error in poloniex controller');
        next(error);
      })
  }
}


export default poloniexController;