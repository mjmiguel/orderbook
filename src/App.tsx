import * as React from 'react';
import { hot } from 'react-hot-loader/root';

export interface IAppProps {}

function IApp(props: IAppProps) {
  return (
    <>
      <h1>Hello there</h1>
    </>
  );
}

export default hot(App);
