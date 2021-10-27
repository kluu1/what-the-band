import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render header', () => {
  render(<Header />);
  const header = screen.getByText(/chuck/i);
  expect(header).toBeTruthy();
});
