import React from 'react';
// Components
import BuyContainer from './components/containers/BuyContainer';
import SellContainer from './components/SellContainer';

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
