import PropTypes from 'prop-types';
import transactions from '../transactions';
import styles from '../transactions/TransactionHistory.module.css';

const TransactionHistory = ({ transactionList }) => {
  transactionList = {
    type: 'Type',
    amount: 'Amount',
    currency: 'Currency',
  };
  return (
    <table className={styles.transactionsHistory}>
      <thead>
        <tr key={generateUniqueNumber()}>
          <th>{transactionList.type}</th>
          <th>{transactionList.amount}</th>
          <th>{transactionList.currency}</th>
        </tr>
      </thead>
      {transactions.map((el, index) => {
        return (
          <tbody key={index} className={styles.tableBody}>
            <tr key={el.id}>
              <td className={styles.tableData}>{el.type}</td>
              <td className={styles.tableData}>{el.amount}</td>
              <td className={styles.tableData}>{el.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

function generateUniqueNumber() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000);

  return `${timestamp}-${randomNum}`;
}

export default TransactionHistory;
