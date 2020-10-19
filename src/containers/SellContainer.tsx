import React, { FC } from 'react';
import { exchangeObject } from '../../types/types';

type SellProps = {
  asks: exchangeObject[];
};

const SellContainer:FC<SellProps> = ({ asks }: SellProps) => {
  return (
    <>
      <h1>Sell Container</h1>
      <div>
      <h2>Ask</h2>
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

export default SellContainer;