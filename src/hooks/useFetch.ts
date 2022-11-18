/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';

type GithubApiResponse = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  message?: string;
};

function useFetch() {
  const [githubData, setGithubData] = useState({} as GithubApiResponse);

  const fetchGithubData = async (githubUsername: string): Promise<void> => {
    if (githubUsername !== githubData?.login) {
      const response: Response = await fetch(
        `https://api.github.com/users/${githubUsername}`
      );
      const data: GithubApiResponse = await response.json();
      const {
        login,
        avatar_url,
        html_url,
        name,
        bio,
        public_repos,
        followers,
        following,
        message,
      } = data;

      setGithubData({
        login,
        avatar_url,
        html_url,
        name,
        bio,
        public_repos,
        followers,
        following,
        message,
      } as GithubApiResponse);
    }
  };

  return { githubData, fetchGithubData };
}

export default useFetch;
