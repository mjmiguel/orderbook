import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/hooks';
import BuyContainer from './BuyContainer';
import SellContainer from './SellContainer';

export interface OrderbookProps {}

function Orderbook(props: OrderbookProps) {

  const [bids, setBids] = useState(null);
  const [asks, setAsks] = useState(null);

  const getBooks = ():void => {
    fetch(`/api`)
    .then((res) => res.json())
    .then((data) => {
      console.log('got something back?', data);
      if (data.bid && data.ask) {
        setBids(data.bids);
        setAsks(data.asks);
      } else {
        console.log('no data returned')
      }
    }).catch((e) => {
      console.log('there was an error', e);
    })
  }

  // useInterval(getBooks, 5000);

  return (
    <>
      <h1>ORDERBOOK</h1>
      <BuyContainer bids={bids} />
      <SellContainer asks={asks}/>
    </>
  );
}

export default Orderbook;