import React, { createContext, useState, useContext } from 'react';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string
  }
};

type SearchContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useUsers() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}

export function UserProvider ({children}: {children: React.ReactNode}){
  const [users, setUsers] = useState<User[]>([]);

  return (
    <SearchContext.Provider value={{ users, setUsers }}>
      {children}
    </SearchContext.Provider>
  );
}
