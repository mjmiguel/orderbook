import React, { FC, useContext } from 'react';
import { orderbookContext } from '../containers/Orderbook';
import { exchangeObject } from '../../types/types';

type TableRowProps = {
  data: exchangeObject
};

const TableRow: FC<TableRowProps> = ({ data }: TableRowProps) => {
  return (
    <tr>
      <td>{data.exchange}</td>
      <td>{data.quantity}</td>
      <td>{data.price}</td>
      <td>{data.price * data.quantity}</td>
    </tr>
  );
};

export default TableRow;