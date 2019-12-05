import React from 'react';
import { render } from '@testing-library/react';
import Tasks from './Tasks';

test('renders learn react link', () => {
  const { getByText } = render(<Tasks />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
