import React, { FC } from 'react';
import { exchangeObject } from '../../types/types';

type BuyProps = {
  bids: exchangeObject[];
};

BuyContainer.defaultProps = {
  bids: []
}

const BuyContainer: FC<BuyProps & BuyContainer.defaultProps> = ({ bids }: BuyProps) => {

  return (
    <>
      <h1>Buy Container</h1>
      <div>
        <h2>Bid</h2>
        <table>
          <tbody>
            <tr>
              <th className="header"><h3>Price</h3></th>
              <br />
              <br />
              <th className="header"><h3>Amount</h3></th>
              <br />
              <br />
              <th className="header"><h3>Total</h3></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BuyContainer;