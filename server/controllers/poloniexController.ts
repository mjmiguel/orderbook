import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { exchangeObject, processedData } from '../../types/types';
 
/* ----- Poloniex API format ----- */
// URL: https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH

// Response object from Bittrex API
interface apiResponseObject {
  bids: (string | number)[][],
  asks: (string | number)[][],
}

// Compose new object from data recieved from API
const processResponse = (jsonObj: apiResponseObject): processedData  => {
  // result to be passed to apiRouter and processed
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
      exchangeObj.exchange = 'Poloniex';
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