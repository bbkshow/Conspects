import React from 'react';
import PropTypes from 'prop-types';
import TransactionsItem from './TransactionsItem';

import s from './Transactions.module.css';

export default function Transactions({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr className={s.tableRow}>
          <th className={s.tableCell}>Type</th>
          <th className={s.tableCell}>Amount</th>
          <th className={s.tableCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionsItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.array,
};
