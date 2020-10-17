import React, { FC } from 'react';
import Table from '../components/table';


type BuyProps = {};

const BuyContainer:FC = (props: BuyProps) => {
  return (
    <>
      <h1>Buy Container</h1>
      <div>
        <Table />
      </div>
    </>
  );

}

export default BuyContainer;