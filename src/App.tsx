import React from 'react';
import BuyContainer from './containers/BuyContainer';
import SellContainer from './containers/SellContainer';

export interface AppProps {}

function App(props: AppProps) {
  return (
    <>
      <h1>Hello there</h1>
      <BuyContainer />
      <SellContainer />
    </>
  );
}

export default App;
