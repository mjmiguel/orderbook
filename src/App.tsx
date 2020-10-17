import React from 'react';
import BuyContainer from './components/BuyContainer';

export interface AppProps {}

function App(props: AppProps) {
  return (
    <>
      <h1>Hello there</h1>
      <BuyContainer />
    </>
  );
}

export default App;
