import { describe, expect, it } from 'vitest';
import { act, fireEvent, getByLabelText, render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should match with snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should add username', async () => {
    const { getByRole } = render(<Home />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'facebook' } });

    const button = getByRole('button') as HTMLButtonElement;

    await act(() => {
      fireEvent.click(button);
    });

    expect(input).toHaveValue('facebook');
  });

  it('should not add username when input is empty', async () => {
    const { getByRole } = render(<Home />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });

    const button = getByRole('button') as HTMLButtonElement;

    await act(() => {
      fireEvent.click(button);
    });

    expect(input).toHaveValue('');
  });
});
