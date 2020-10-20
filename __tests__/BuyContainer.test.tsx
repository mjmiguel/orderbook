import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import BuyContainer, { BuyProps } from '../src/containers/BuyContainer';
import { orderbookContext } from "../src/containers/Orderbook";

// assign default props and return rendered comp
function renderBuyContainer(props: BuyProps = {}) {
  const defaultProps: BuyProps = { };
  return render(
    <orderbookContext.Provider value={[]}>
      <BuyContainer {...defaultProps} {...props} />
    </orderbookContext.Provider>
  );
}

describe("<BuyContainer />", () => {
  
  // get rendered component
  const { container, getByText } = renderBuyContainer();

  test(`should render an element containing "BID"`, async () => {
    expect(getByText("BID")).toBeInTheDocument();
  });

  test(`should snapshot should match previous`, async () => {
    expect(container).toMatchSnapshot();
  });
});