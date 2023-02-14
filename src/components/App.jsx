import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';
import userEvent from '@testing-library/user-event';
import { Profile } from './Profile/Profile';
import { Friends } from './Friends/Friends';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="UPLOAD STATS" />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
};
