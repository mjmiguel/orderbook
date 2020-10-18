import React from 'react';
import Orderbook from './containers/Orderbook';
import './stylesheets/styles.scss';

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
