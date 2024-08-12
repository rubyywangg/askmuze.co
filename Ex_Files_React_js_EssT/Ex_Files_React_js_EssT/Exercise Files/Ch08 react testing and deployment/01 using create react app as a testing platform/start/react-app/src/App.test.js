import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //in this app.test.js file, we are saying that we expect the link to be the text "learn react"
  expect(linkElement).toBeInTheDocument();
});
//npm test will run anything with the "test" keyword in the file name

