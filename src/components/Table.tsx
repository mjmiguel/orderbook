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
      // sort best 25
      let top20;
      // sort low to high for asks
      // sort high to low for bids
      if (bookType === 'ask') {
        top20 = data.sort((a:exchangeObject, b:exchangeObject) => a.price - b.price ).slice(0,20);
      } else if (bookType === 'bid') {
        top20 = data.sort((a:exchangeObject, b:exchangeObject) => b.price - a.price ).slice(0,20);
      }

      if (top20) {
        // add best 25 to table
        let rowArray = top20.reduce((acc, curr) => {
          acc.push(<TableRow key={curr.price+curr.quantity} data={curr} />);
            return acc;
        }, []);
        setRowArray(rowArray);
      }
    }
  }, [data]);

  return (
    <div >
      <table>
        <thead>
          <tr>
            <th className="table-header"></th>
            <th className="table-header">Quantity</th>
            <th className="table-header">Price</th>
            <th className="table-header">Total</th>
          </tr>
        </thead>
        <tbody>
          {rowArray || <tr><td>Loading...</td></tr>}
        </tbody>
      </table>
    </div>
  )
};

export default Table;