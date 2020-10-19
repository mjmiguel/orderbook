import React from 'react';
import Orderbook from './containers/Orderbook';
import './stylesheets/styles.scss';

type AppProps = {}

function App(props: AppProps) {
  return (
    <>
      <Orderbook />
    </>
  );
}

export default App;
