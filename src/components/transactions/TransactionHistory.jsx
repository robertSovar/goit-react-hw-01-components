import PropTypes from 'prop-types';
import transactions from '../transactions';

const TransactionHistory = ({ transactionList }) => {
  transactionList = {
    type: 'Type',
    amount: 'Amount',
    currency: 'Currency',
  };
  return (
    <table className="transaction-history">
      <thead>
        <tr key={generateUniqueNumber()}>
          <th>{transactionList.type}</th>
          <th>{transactionList.amount}</th>
          <th>{transactionList.currency}</th>
        </tr>
      </thead>
      {transactions.map((el, index) => {
        return (
          <tbody key={index}>
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

transactions.propTypes = {
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
