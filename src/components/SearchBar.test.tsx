import { describe, expect, it, vi } from 'vitest';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should change input value', () => {
    const handleChange = vi.fn();

    const { getByRole } = render(<SearchBar onHandleChange={handleChange} />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'facebook' } });

    expect(input).toHaveValue('facebook');
  });

  it("shouldn't not call handleChange when input value is empty", async () => {
    const handleChange = vi.fn();

    const { getByRole } = render(<SearchBar onHandleChange={handleChange} />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });

    const button = getByRole('button') as HTMLButtonElement;

    await act(() => {
      fireEvent.click(button);
    });

    expect(input).toHaveValue('');
    expect(handleChange).not.toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(0);
  });

  it('should call onHandleChange when submit', async () => {
    const handleChange = vi.fn();

    const { getByRole } = render(<SearchBar onHandleChange={handleChange} />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'facebook' } });

    const button = getByRole('button') as HTMLButtonElement;

    fireEvent.click(button);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledWith('facebook');
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  it('should show error message when input value is empty', async () => {
    const handleChange = vi.fn();

    const { getByRole } = render(<SearchBar onHandleChange={handleChange} />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });

    const button = getByRole('button') as HTMLButtonElement;

    await act(() => {
      fireEvent.submit(button);
    });

    expect(input).toHaveValue('');
    expect(screen.getByText('GitHub username is required')).toBeInTheDocument();
  });
});
