import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const Index = () => {
  return <App />;
};

const mountNode = document.getElementById('root');

ReactDOM.render(<Index />, mountNode);
