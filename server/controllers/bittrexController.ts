import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';
import { exchangeObject, processedData } from '../../types/types';

/* ----- Bittrex API format ----- */
// URL: https://api.bittrex.com/v3/markets/ETH-BTC/orderbook
// default depth is 25

// Response object from Bittrex API
interface apiResponseObject {
  bid: { quantity: number, rate: number }[],
  ask: { quantity: number, rate: number }[],
}

// Compose new object from data recieved from API
const processResponse = (jsonObj: apiResponseObject): processedData  => {
  // result to be passed to apiRouter and processed
  let resultObj: processedData = {
    bid: [],
    ask: []
  };

  // create objects from returned data and add them to resultObj
  const addObjects = (bookType: string, arr:{ quantity: number, rate: number }[]): void => {
    arr.forEach((element: { quantity: number, rate: number }) => {
      let exchangeObj: exchangeObject = {
        exchange: '',
        quantity: 0,
        price: 0
      }
      exchangeObj.exchange = 'Bittrex';
      exchangeObj.quantity = Number(element.quantity);
      exchangeObj.price = Number(element.rate);
      resultObj[bookType].push(exchangeObj);
    });
  }

  // process bids and asks arrays from API response
  addObjects('bid', jsonObj.bid);
  addObjects('ask',jsonObj.ask)

  return resultObj;
}

const bittrexController = {
  getBooks: (req: Request, res: Response, next: NextFunction): void => {
    fetch('https://api.bittrex.com/v3/markets/ETH-BTC/orderbook')
      .then((res) => res.json())
      .then((data) => {
        const processedData = processResponse(data);
        res.locals.bittrex = processedData;
        next();
      }).catch((error) => {
        console.log('error in bittrex controller');
        next(error);
      })
  }
}


export default bittrexController;