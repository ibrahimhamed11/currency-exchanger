import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page text', () => {
  render(<App />);
  const homePageText = screen.getByText(/Home Page/i);
  expect(homePageText).toBeInTheDocument();
});
