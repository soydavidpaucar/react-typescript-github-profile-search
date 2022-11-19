import { describe, it } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import useFetch from './useFetch';

describe('useFetch', () => {
  const githubUsername = 'facebook';

  it('should return the initial state', () => {
    const { result } = renderHook(() => useFetch(githubUsername));

    const { githubData, isLoading } = result.current;

    expect(githubData).toStrictEqual({});
    expect(isLoading).toBe(true);
  });

  it('should return the correct data', async () => {
    const { result } = renderHook(() => useFetch(githubUsername));

    await waitFor(() =>
      expect(result.current.githubData.login).toBe('facebook')
    );

    const { githubData, isLoading } = result.current;

    expect(githubData.login).toBe('facebook');
    expect(isLoading).toBe(false);
  });

  it('should return error message if the user does not exist', async () => {
    const { result } = renderHook(() =>
      useFetch('this-user-does-not-exist-yet')
    );

    await waitFor(() =>
      expect(result.current.githubData.message).toBe('Not Found')
    );

    const { githubData } = result.current;

    expect(githubData.message).toBe('Not Found');
  });
});
