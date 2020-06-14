import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders an antd button', () => {
  const { getByText } = render(<App />);
  const btn = getByText(/Button/i);
  expect(btn).toBeInTheDocument();
});
