import React, { FC, useState, useEffect } from 'react';
import { exchangeObject } from '../../types/types';
import TableRow from './TableRow';

type TableProps = {
  data: exchangeObject[],
  bookType: string
}

const Table: FC<TableProps> = ({ data, bookType }: TableProps) => {

  const [rowArray, setRowArray] = useState(null);

  useEffect(() => {
    if (data) {
      // sort best 25 first
      // sort low to high for asks
      // sort high to low for bids
      let top25;
      
      if (bookType === 'ask') {
        top25 = data.sort((a:exchangeObject, b:exchangeObject) => a.price - b.price ).slice(0,25);
      } else {
        top25 = data.sort((a:exchangeObject, b:exchangeObject) => b.price - a.price ).slice(0,25);
      }

      // add best 25 to table
      let rowArray = top25.reduce((acc, curr,) => {
        acc.push(<TableRow key={curr.price} data={curr} />);
          return acc;
        }, []);
        setRowArray(rowArray);
    }
  }, [data]);

  return (
      <table>
        <tbody>
          <tr>
            <th className="header">Exchange</th>
            <th className="header">Quantity</th>
            <th className="header">Price</th>
            <th className="header">Total</th>
          </tr>
          <tr>
            {rowArray || 'Loading'}
          </tr>
        </tbody>
      </table>
  )
};

export default Table;