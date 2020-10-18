import React from 'react';
import Orderbook from './containers/Orderbook';

export interface AppProps {}

function App(props: AppProps) {
  return (
    <>
      <h1>Hello there</h1>
      <Orderbook />
    </>
  );
}

export default App;
