import { TransactionList } from './TransactionList/TransactionList';
import { TransactionWrapper, Title } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionWrapper>
      <TransactionList transactions={transactions} />
    </TransactionWrapper>
  );
};
