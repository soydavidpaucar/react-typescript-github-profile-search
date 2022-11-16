import { useState } from 'react';

function useFetch() {
  const [githubData, setGithubData] = useState<[]>([]);

  const fetchGithubData = async (githubUsername: string): Promise<void> => {
    const response: Response = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    const data: [] = await response.json();
    console.log(data);
    setGithubData(data);
  };

  return { githubData, fetchGithubData };
}

export default useFetch;
