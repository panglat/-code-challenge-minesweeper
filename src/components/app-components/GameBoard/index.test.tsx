import React from 'react';
import { render } from '@testing-library/react';
import GameBoard from '.';

test('renders learn react link', () => {
  const { getByText } = render(<GameBoard />);
});
