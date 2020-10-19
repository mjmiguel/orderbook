import React, { FC, useContext } from 'react';
import { orderbookContext } from './Orderbook';
import Table from '../components/Table';

type SellProps = {};

const SellContainer:FC<SellProps> = (props: SellProps) => {

  const asks = useContext(orderbookContext)['asks'];

  return (
    <>
      <div className="container">
        <h2>ASK</h2>
        <Table data={asks} bookType="ask"/>
      </div>
    </>
  );
}

export default SellContainer;