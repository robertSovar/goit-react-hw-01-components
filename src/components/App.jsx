import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friends from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics condition={false} />
      <Friends />
      <TransactionHistory />
    </div>
  );
};
