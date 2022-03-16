import React from 'react';
import PropTypes from 'prop-types';

import s from './Transactions.module.css';

export default function TransactionsItem({ id, type, amount, currency }) {
  return (
    <tr className={s.tableRow} key={id}>
      <td className={s.tableCell}>{type}</td>
      <td className={s.tableCell}>{amount}</td>
      <td className={s.tableCell}>{currency}</td>
    </tr>
  );
}

TransactionsItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
