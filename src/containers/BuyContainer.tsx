import React, { FC } from 'react';
import fetch from 'node-fetch';

type BuyProps = {};

const BuyContainer:FC = (props: BuyProps) => {

  const getBooks = ():void => {
    console.log('getbooks fired')
    fetch('/api')
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
        <button onClick={getBooks}>get books</button>
      </div>
    </>
  );

}

export default BuyContainer;