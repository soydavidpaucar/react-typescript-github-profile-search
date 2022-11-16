import { Alert, AlertIcon } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';

function Home() {
  const { githubData, fetchGithubData } = useFetch();

  return (
    <>
      <SearchBar onSearchGithubUsername={fetchGithubData} />
      {githubData.message && (
        <Alert status="error">
          <AlertIcon />
          Github user not found, please try again
        </Alert>
      )}
    </>
  );
}

export default Home;
