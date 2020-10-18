import React from 'react';
import BuyContainer from './BuyContainer';
import SellContainer from './SellContainer';

export interface Orderbook {}

function Orderbook(props: Orderbook) {
  return (
    <>
      <h1>ORDERBOOK</h1>
      <BuyContainer />
      <SellContainer />
    </>
  );
}

export default Orderbook;