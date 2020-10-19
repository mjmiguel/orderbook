import React, { FC, useContext } from 'react';
import { orderbookContext } from './Orderbook';
// import Table from '../components/Table';


type BuyProps = {
  // bids: exchangeObject[];
};

const BuyContainer: FC<BuyProps> = (props: BuyProps) => {

const bids = useContext(orderbookContext);

  return (
    <>
      <h1>Buy Container</h1>
      <div>
        <h2>Bid</h2>
        
      </div>
    </>
  );
}


export default BuyContainer;