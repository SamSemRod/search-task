import { useUsers } from './SearchContext';
import UserCard from '../UserCard/UserCard';
import { useMemo } from 'react';

import "./style.css";

export default function SearchResults() {
  const { users } = useUsers();
  const memoizedUserCards = useMemo(() => {
    return users.map((user) => <UserCard key={user.id} user={user} />);
  }, [users]);
  return (
    <div className="usersList">
      {memoizedUserCards}
    </div>
  );
}
