import React, { FC } from 'react';
import { exchangeObject } from '../../types/types';

type TableRowProps = {
  data: exchangeObject
};

const TableRow: FC<TableRowProps> = ({ data }: TableRowProps) => {
  return (
    <tr className="table-row">
      <td>{data.exchange}</td>
      <td>{data.quantity}</td>
      <td>{data.price}</td>
      <td>{(data.price * data.quantity).toFixed(8)}</td>
    </tr>
  );
};

export default TableRow;