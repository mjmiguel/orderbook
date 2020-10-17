import React from 'react';
import { render } from 'react-dom';
import App from './App';

const mountNode = document.getElementById('root');

const Index = () => {
  return <App />;
}

render(<Index />, mountNode);

