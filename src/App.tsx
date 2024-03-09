import { UserProvider } from './components/SearchResults/SearchContext';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <UserProvider>
        <SearchForm />
        <SearchResults />
    </UserProvider>
  );
}

export default App;
