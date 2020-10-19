import React, { FC } from 'react';
import { exchangeObject } from '../../types/types';
import Table from '../components/Table';


type BuyProps = {
  bids: exchangeObject[];
};

const BuyContainer: FC<BuyProps> = ({ bids }: BuyProps) => {

  return (
    <>
      <h1>Buy Container</h1>
      <div>
        <h2>Bid</h2>
        <Table />
      </div>
    </>
  );
}


export default BuyContainer;