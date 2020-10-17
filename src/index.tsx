import React from 'react';
import { render } from 'react-dom';
import App from './App';

const Index = () => {
  return <App />;
};

const mountNode = document.getElementById('root');

render(<Index />, mountNode);
