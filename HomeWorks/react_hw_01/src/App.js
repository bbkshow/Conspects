import Profile from './components/social-profile/Profile.js';
import user from './data/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/friends/FriendList';
import friends from './data/friends.json';

import Transactions from './components/transaction-history/Transactions';
import transactions from './data/transactions.json';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}
