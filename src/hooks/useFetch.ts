import { useState } from 'react';

function useFetch() {
  const [githubData, setGithubData] = useState<[]>([]);

  const fetchGithubData = async (githubUsername: string): Promise<void> => {
    if (githubUsername !== githubData?.login) {
      const response: Response = await fetch(
        `https://api.github.com/users/${githubUsername}`
      );
      const data: [] = await response.json();
      setGithubData(data);
    }
  };

  return { githubData, fetchGithubData };
}

export default useFetch;
