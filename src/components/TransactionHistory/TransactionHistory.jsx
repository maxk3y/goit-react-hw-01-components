import { TransactionList } from './TransactionList/TransactionList';
import { TransactionWrapper } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionWrapper>
      <TransactionList transactions={transactions} />
    </TransactionWrapper>
  );
};
