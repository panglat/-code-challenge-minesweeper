import React from 'react';
import { render } from '@testing-library/react';
import Board from '.';

test('renders learn react link', () => {
  const { getByText } = render(<Board />);
});
