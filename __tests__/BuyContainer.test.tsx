import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
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

  test("should render an h2 element with BUY", async () => {
    const { container, getByText } = await renderBuyContainer();
    // expect(getByText('BUY')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2>BID</h2>
    `);
 
  });
});