import React, { FC } from 'react';
import fetch from 'node-fetch';
type BuyProps = {};

const BuyContainer:FC = (props: BuyProps) => {

  const getBooks = ():void => {

  }
  return (
    <>
      <h1>Buy Container</h1>
      <div>
        hello
      </div>
      <div>
        <button onClick={}>get books</button>
      </div>
    </>
  );

}

export default BuyContainer;