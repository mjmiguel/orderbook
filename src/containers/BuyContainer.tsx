import React, { FC } from 'react';
import fetch from 'node-fetch';

type BuyProps = {};

const BuyContainer:FC = (props: BuyProps) => {

  const getBooks = (exchange: string):void => {
    console.log('getbooks fired')
    fetch(`/api/${exchange}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('got something back?', data);
      }).catch((e) => {
        console.log('there was an error', e);
      })
  }

  return (
    <>
      <h1>Buy Container</h1>
      <div>
        hello
      </div>
      <div>
        <button onClick={() => {getBooks('polo')}}>get Poloniex books</button>
      </div>
      <div>
        <button onClick={() => {getBooks('bitt')}}>get Bittrex books</button>
      </div>
    </>
  );

}

export default BuyContainer;