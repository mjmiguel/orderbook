import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import SellContainer, { SellProps } from '../src/containers/SellContainer';
import { orderbookContext } from "../src/containers/Orderbook";

// assign default props and return rendered comp
function renderSellContainer(props: SellProps = {}) {
  const defaultProps: SellProps = { };
  return render(
    <orderbookContext.Provider value={[]}>
      <SellContainer {...defaultProps} {...props} />
    </orderbookContext.Provider>
  );
}

describe("<SellContainer />", () => {

  // get rendered component
  const { container, getByText } =  renderSellContainer();

  test(`should render an element containing "ASK`, async () => {
    expect(getByText('ASK')).toBeInTheDocument();
  });

  test(`should snapshot should match previous`, async () => {
    expect(container).toMatchSnapshot();
  });
});