import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/hooks';
import BuyContainer from './BuyContainer';
import SellContainer from './SellContainer';

export interface OrderbookProps {}

function Orderbook(props: OrderbookProps) {

  const [fullMarketData, setFullMarketData] = useState(null);

  const getBooks = ():void => {
    fetch(`/api/polo`)
    .then((res) => res.json())
    .then((data) => {
      console.log('got something back?', data);
      if (data.bid && data.ask) {
        setFullMarketData(data);
      } else {
        console.log('no data returned')
      }
    }).catch((e) => {
      console.log('there was an error', e);
    })
  }

  useEffect(() => {
    console.log('useeffect fired, new data')
  }, [fullMarketData])
  // useInterval(getBooks, 5000);

  return (
    <>
      <h1>ORDERBOOK</h1>
      <BuyContainer />
      <SellContainer />
    </>
  );
}

export default Orderbook;