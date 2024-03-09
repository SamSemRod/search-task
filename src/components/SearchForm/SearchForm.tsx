import { useState, useEffect, useContext } from 'react';
import { useUsers, SearchContext } from '../SearchResults/SearchContext';
import "./styles.css";

export default function SearchForm () {
  const [input, setInput] = useState('');
  const { setUsers } = useUsers();

  useEffect(() => {
    const fetchUsers = async () => {
      if (input === '') {
        setUsers([]);
        return;
      }
      const response = await fetch(`https://dummyjson.com/users/search?q=${input}`);
      const data = await response.json();
      setUsers(data.users);
    };

    const timerId = setTimeout(() => {
      fetchUsers();
    }, 500); // задержка 500 мс

    return () => clearTimeout(timerId);
  }, [input, setUsers]);
  console.log(useContext(SearchContext));
  return (
    <div className='searchForm'>
      <form>
      <input
        type="text"
        placeholder="Search Users"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      </form>
    </div>
  );
}
