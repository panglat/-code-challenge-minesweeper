import React from 'react';
import { render } from '@testing-library/react';
import GameSetup from '.';

test('renders learn react link', () => {
  const { getByText } = render(<GameSetup />);
});
