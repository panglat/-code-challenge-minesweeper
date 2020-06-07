import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import GameBoard from '.';

test('can render with redux with defaults and withRouter', () => {
  const { getByText } = render(
    <Provider store={store}>
      <GameBoard />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});
