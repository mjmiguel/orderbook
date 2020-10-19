import React, { FC, useContext } from 'react';
import { orderbookContext } from './Orderbook';
import Table from '../components/Table';


export type BuyProps = {};

const BuyContainer: FC<BuyProps> = (props: BuyProps) => {

const bids = useContext(orderbookContext)['bids'];

  return (
    <>
      <div className="container">
        <h2>BID</h2>
        <Table data={bids} bookType="bid"/>
      </div>
    </>
  );
}


export default BuyContainer;