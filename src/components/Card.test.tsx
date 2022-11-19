import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import useFetch from '../hooks/useFetch';
import Card from './Card';

vi.mock('../hooks/useFetch');

describe('Card', () => {
  it('should show loading when fetching data', () => {
    vi.mocked(useFetch).mockReturnValueOnce({
      githubData: {},
      isLoading: true,
    });

    const { container } = render(<Card githubUsername="facebook" />);
    const loader = container.querySelector('.animate-spin');

    expect(loader).toBeInTheDocument();
  });

  it('should display error message when github username is not found', async () => {
    vi.mocked(useFetch).mockReturnValueOnce({
      githubData: {
        message: 'Not Found',
      },
      isLoading: false,
    });

    const { container } = render(<Card githubUsername="facebook123abca" />);

    const errorMessage = container.querySelector('.text-red-500');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      'Github user not found, please try again'
    );
  });

  it('should display github data', async () => {
    vi.mocked(useFetch).mockReturnValueOnce({
      githubData: {
        login: 'facebook',
        avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
        html_url: 'https://github.com/facebook',
        name: 'Meta',
        bio: 'We are working to build community through open source technology. NB: members must have two-factor auth.',
        public_repos: 118,
        followers: 7877,
        following: 0,
      },
      isLoading: false,
    });

    render(<Card githubUsername="facebook" />);

    expect(screen.getByText('Meta')).toBeInTheDocument();
    expect(
      screen.getByText(
        'We are working to build community through open source technology. NB: members must have two-factor auth.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('118')).toBeInTheDocument();
  });
});
