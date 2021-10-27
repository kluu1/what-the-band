import { render, screen } from '@testing-library/react';
import AppBar from './AppBar';

test('render header', () => {
  render(<AppBar>What the chuck?</AppBar>);
  const header = screen.getByText(/chuck/i);
  expect(header).toBeTruthy();
});
