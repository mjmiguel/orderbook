import React, { FC, useContext } from 'react';
import { orderbookContext } from './Orderbook';
import Table from '../components/Table';

type SellProps = {};

const SellContainer:FC<SellProps> = (props: SellProps) => {

  const asks = useContext(orderbookContext)['asks'];

  return (
    <>
      <h1>Sell Container</h1>
      <div>
        <h2>Ask</h2>
        <Table data={asks} bookType="ask"/>
      </div>
    </>
  );
}

export default SellContainer;