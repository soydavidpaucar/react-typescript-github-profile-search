/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react';

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

function useFetch(githubUsername: string) {
  const [githubData, setGithubData] = useState<GithubApiResponse>(
    {} as GithubApiResponse
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((response) => response.json())
      .then((data) => {
        setGithubData({
          login: data.login,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          name: data.name,
          bio: data.bio,
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          message: data.message,
        });
        setIsLoading(false);
      });
  }, [githubUsername]);

  return { githubData, isLoading };
}

export default useFetch;
