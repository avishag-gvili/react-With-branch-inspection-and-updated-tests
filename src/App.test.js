import { render, screen } from '@testing-library/react';
import App from './App';
console.log("1זזזזזזזז")
test('renders learn react link', () => {
  // expect(true).toEqual(false)
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
