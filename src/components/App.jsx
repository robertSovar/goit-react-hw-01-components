import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics condition={false} />
    </div>
  );
};
