import React, { FC, useEffect, useState } from 'react';
import { useInterval } from '../hooks/hooks';
import BuyContainer from './BuyContainer';
import SellContainer from './SellContainer';

export const orderbookContext = React.createContext(null)

export type OrderbookProps = {}

const Orderbook: FC<OrderbookProps> = (props: OrderbookProps) => {
  const [bids, setBids] = useState(null);
  const [asks, setAsks] = useState(null);

  // Fetch combined orderbooks for BTC_ETH markets
  const getBooks = ():void => {
    fetch(`/api`)
    .then((res) => res.json())
    .then((data) => {
      if (data.bid && data.ask) {
        setBids(data.bid);
        setAsks(data.ask);
      }
    }).catch((error) => {
      console.log('there was an error in /api fetch', error);
    })
  }

  // run once before interval starts
  useEffect(() => {
    if (!bids && !asks) getBooks()
  }, [])

  // getBooks() at an interval
  useInterval(getBooks, 5000);

  return (
    <>
      <h1>ORDERBOOK</h1>
      <h3>BTC_ETH</h3>
      <div className="main-container">
      <orderbookContext.Provider value={{bids, asks}}>
        <BuyContainer />
        <SellContainer />
      </orderbookContext.Provider>
      </div>
    </>
  );
}

export default Orderbook;